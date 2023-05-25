
const RestUtil = async (
    endPoint,
    { method = 'GET', headers = {}, body = {},  },
) => {
    
    
    let defaultHeader = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };


    
    let config = {
        method: method,
        headers: {
            ...defaultHeader,
            ...headers,
        },
    };

    if (method.toUpperCase() !== 'GET') {
        config.body = body;
    }

    return fetch(endPoint, config);
};

export { RestUtil as default };