import 'colors';
import _ from 'lodash';
var exec = require('child-process-promise').exec;
var spawn = require('child-process-promise').spawn;

let executionOptions = {
  dryRun: false,
  verbose: false
};

function logWithPrefix(prefix, message) {
  console.log(
    message.toString().trim()
    .split('\n')
    .map((line) => '${prefix.grey} ${line}')
    .join('\n')
  );
}

function execWrapper(command, options = {}) {
  let proc = exec(command, options);
  if (!executionOptions.verbose) {
    return proc;
  }
  let title = options.title || command;
  let output = (data, type) => logWithPrefix('[${title}] ${type}:', data);
  return proc.progress(({stdout, stderr}) => {
    stdout.on('data', data => output(data, 'stdout'));
    stderr.on('data', data => output(data, 'stderr'));
  })
  .then(result => {
    logWithPrefix('[${title}]', 'Complete'.cyan);
    return result;
  });
}

function spawnWrapper(command, args=[], options={}) {
  var promise = spawn(command, args);   
  let title = options.title || command || '';  
  var childProcess = promise.childProcess; 
  let childProcessInfo = `PID: ${childProcess.pid}, Process: ${title}`

  childProcess.stdout.on('data', function (data) {    
    console.log(data.toString());
  });  
  
  childProcess.stderr.on('data', function (data) {
    console.log('[spawn] stderr - ', childProcessInfo);
    console.log('[spawn] stderr: ', data.toString());
  }); 
  
  promise.then(function (result) {
    return result    
  }).catch(function (err) {
    console.log('FAILED - ', childProcessInfo); 
    console.error('[spawn] ERROR: ', err);
    throw err;
  });

   if (!executionOptions.verbose) {
     return promise;
  } 
}

function safeExec(command, options = {}) {
  let title = options.title || command;
  if (executionOptions.dryRun) {
    logWithPrefix('[${title}]'.grey, 'DRY RUN'.magenta);
    return Promise.resolve();
  }
  return execWrapper(command, options);
}

function setExecOptions(options) {
  executionOptions = _.extend({}, executionOptions, options);
}

export default {
  exec: execWrapper,
  spawn:spawnWrapper,
  safeExec,
  setExecOptions
};