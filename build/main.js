import 'colors';
import compose from './compose';

require('events').EventEmitter.prototype._maxListeners = 100;
let buildProcess = compose();

buildProcess.catch(
    err => {
        if(err.stack) {
            console.error(err.stack.red);
        } else {
            console.error(err.toString().red);
        }
    }
);  
   