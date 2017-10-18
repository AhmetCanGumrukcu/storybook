export class IProxy {
    constructor() {
    }

    _serviceCall(request) {
        let result = this.serviceCall ? this.serviceCall(request) : null;
        if (!result) {
            result = Promise.resolve({});
        }
        return result;
    }

    _callBase(request) {
        if ((typeof request) === "string") {
            request = { servicePath: request };
        }
        let result = this._serviceCall(request);
        return result;
    }
}

export class ServiceProxy extends IProxy {
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
    }

    call(request) {
        return this._callBase(request);
    }

    getBaseUrl(request) {
        let baseUrl = request.baseUrl || this.baseUrl;
        return baseUrl ? (baseUrl.replace(/[\/\s]+$/, "") + "/") : "";
    }

    serviceCall(request) {
        let baseUrl = this.getBaseUrl(request);
        let url = baseUrl + request.servicePath;
        let requestString = JSON.stringify(request.data);
        let requestObj = {
            url: url,
            data: requestString,
            type: request.method || "GET",
            timeout: request.timeout ? request.timeout : 30000,
            crossDomain: true,
            cache: false,
            processData: false,
            dataType: request.dataType || "json",
            headers: request.headers
        };

        let promise = $.ajax(requestObj);
        return promise;
    }
}

export default ServiceProxy;

export class MockProxy extends IProxy {
    constructor(mockDataDictionary) {
        super();
        this.mockDataDictionary = mockDataDictionary;
    }

    call(request) {
        return this._callBase(request);
    }

    serviceCall(request) {
        let methodName = request.servicePath;
        let dictionary = this.mockDataDictionary;
        let promise = new Promise((resolve, reject) => {
            try {
                let obj = null;
                for (let index in dictionary) {
                    let item = dictionary[index];
                    if (item && item.name === methodName) {
                        obj = item.value(request.data);
                        break;
                    }
                }
                if (obj) {
                    resolve(obj);
                }
                else {
                    reject("method not found");
                }
            }
            catch (e) {
                reject(e);
            }
        });
        return promise;
    }
}