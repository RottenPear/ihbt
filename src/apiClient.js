import request from 'request-promise';
import camelize from 'camelize';
import snakeize from 'snakeize';


const API_URL = "http://ec95e3e6.ngrok.io/api";

const requestCreator = defaultOptions => (additionalOptions = {}) => {
  const options = Object.assign({}, defaultOptions, additionalOptions);

  const {
    uri: optionUri,
  } = options;

  // is uri a path or has API_URL
  const uri = !/^https?:\/\//.test(optionUri) && API_URL ?
    `${API_URL}${optionUri}` : optionUri;

  return request({
    ...options,
    uri,
  });
};


class APIError extends Error {
  constructor(error) {
    super(error.message);

    this.name = 'APIError';
    this.error = error;
  }
}


class APIClient {
  constructor(transformOnReceive = null, transformOnSend = null, defaultOptions = {}) {
    this.transformOnReceive = transformOnReceive || (body => body);
    this.transformOnSend = transformOnSend || (body => body);
    this.defaultOptions = defaultOptions;
  }

  getRequestCreatorOrPromise(uri, method, options = {}) {
    const rc = requestCreator({
      ...this.defaultOptions,
      uri,
      method,
      transform: this.transformOnReceive,
      ...options,
      body: options.body ? this.transformOnSend(options.body) : {},
    });

    return options.asPromise ? rc() : rc;
  }

  get(uri, options) {
    return this.getRequestCreatorOrPromise(uri, 'GET', options);
  }

  getJSON(uri, options) {
    return this.getRequestCreatorOrPromise(uri, 'GET', {
      ...options,
      json: true,
    });
  }

  post(uri, body, options) {
    return this.getRequestCreatorOrPromise(uri, 'POST', {
      body,
      ...options,
    });
  }

  patch(uri, body, options) {
    return this.getRequestCreatorOrPromise(uri, 'PATCH', {
      body,
      ...options,
    });
  }

  put(uri, body, options) {
    return this.getRequestCreatorOrPromise(uri, 'PUT', {
      body,
      ...options,
    });
  }

  delete(uri, options) {
    return this.getRequestCreatorOrPromise(uri, 'DELETE', options);
  }
}


const transformOnReceive = body => camelize(body);
const transformOnSend = body => snakeize(body);
const defaultOptions = {
  json: true,
};

export default new APIClient(transformOnReceive, transformOnSend, defaultOptions);
export {
  APIClient,
  APIError,
};
