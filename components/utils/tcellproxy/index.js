class ServiceProxy {
    constructor(rootHost,
                baseUrl,
                username,
                secretKey,
                accesstoken,
                refreshtoken,
                oauthServiceUrl) {
       
        this.rootHost = rootHost;
        this.baseUrl = baseUrl;
        this.username = username;
        this.secretKey = secretKey;
        this.accesstoken = accesstoken;
        this.refreshtoken = refreshtoken;
        this.oauthServiceUrl = oauthServiceUrl;
    }

    renewRequest(url,
                 type,
                 data,
                 identifier,
                 contentType) {
        return $.ajax({
            url: url,
            type: type,
            dataType: 'json',
            cache: false,
            contentType: contentType,
            headers: {
                "Authorization": "Bearer " + this.accesstoken,
                "Tidentifier": identifier,
                "Culture": window["culture"]
            },
            data: data
        });
    }

    refreshRequest() {
        return $.ajax({
                url: this.oauthServiceUrl + "/Token",
                type: "POST",
                crossDomain: true,
                cache: false,
                data: 'grant_type=refresh_token&refresh_token=' + 
                this.refreshtoken + 
                '&secretKey=' + 
                this.secretKey + 
                '&userName=' + 
                this.username,
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            });
            promise.done((response) => {
                this.accesstoken = response.access_token;
                resolve(response);
            });
            promise.fail((jqXhr, textStatus, errorThrown) => {
                reject(errorThrown);
            });
    }

    serviceCall(path, 
                type, 
                data, 
                identifier,
                useAbsolutePath,
                dataType = 'json',
                timeout = 0) {
        return new Promise((resolve,reject) => {        
            let url = useAbsolutePath ? path : this.baseUrl + path;
            let contentType = "application/json; charset=utf-8";
            let requestString = JSON.stringify(data);
            let promise = $.ajax({
                url: url,
                type: type,
                dataType: dataType,
                cache: false,
                contentType: contentType,
                timeout: timeout,
                crossDomain: true,
                headers: {
                    "Authorization": "Bearer " + this.accesstoken,
                    "Tidentifier": identifier,
                    "Culture": window["culture"]
                },
                data: requestString
            });
            promise.done((response) => {
                resolve(response);
            });
            promise.fail((jqXhr, textStatus, errorThrown) => {
                if (jqXhr.status == 400 &&
                    jqXhr.responseJSON !== undefined) {
                    if (jqXhr.responseJSON.Message === 'RefreshRequired') {
                        let refreshPromise = this.refreshRequest();
                        refreshPromise.done((response) => {
                            this.accesstoken = response.access_token;
                            let retryPromise = this.renewRequest(url, type, data, identifier, contentType);
                            retryPromise.done((response) => {
                                resolve(response);
                            });
                            retryPromise.fail((jqXhrRetry, textStatusRetry, errorThrownRetry) => {
                                reject(errorThrownRetry);
                            });
                        });
                        refreshPromise.fail((jqXhrRefresh, textStatusRefresh, errorThrownRefresh) => {
                            reject(errorThrownRefresh);
                        });
                    } else if (jqXhr.responseJSON.Message === CommonResources.Spa.Dictionary.UnAuthorizedResponse) {
                        reject(errorThrown);
                    }  
                }
                else {
                    reject(errorThrown); 
                }
            });
        });
    }
}

class serviceFactory {
    constructor() {
        this.proxyfactory = null
    }
    configure(rootHost,
              baseUrl,
              username,
              secretKey,
              accesstoken,
              refreshtoken,
              oauthServiceUrl) {
        this.proxy = new ServiceProxy(rootHost,
                                 baseUrl,
                                 username,
                                 secretKey,
                                 accesstoken,
                                 refreshtoken,
                                 oauthServiceUrl);
    }
    set proxy(value){
        this.proxyfactory = value;
    }
    get proxy() {
        return this.proxyfactory;
    }
}

export let servicefactory = new serviceFactory();