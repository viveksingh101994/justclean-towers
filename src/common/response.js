class Response {
  static unAuthorized() {
    return {
      status: 403,
      message: {
        type: 'invalid_request_error',
        message: 'Not authorized',
      },
    };
  }
  static serverError() {
    return {
      status: 500,
      message: {
        type: 'api_error',
        message: 'Internal server error',
      },
    };
  }
  static success() {
    return {
      status: 200,
      body: {},
    };
  }
  static noContent() {
    return {
      status: 204,
      message: 'No Content',
    };
  }
  static preConditionFailed() {
    return {
      status: 412,
      message: {
        type: 'invalid_request_error',
        message: 'Pre Condition Failed',
      },
    };
  }
  static created() {
    return {
      status: 201,
      message: {},
    };
  }
  static badRequest() {
    return {
      status: 400,
      message: {},
    };
  }
}

module.exports = Response;
