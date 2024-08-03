// Middleware function to log request details
function logRequest(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
}

// Middleware function to check for a specific header
function checkHeader(req, res, next) {
  if (req.headers['x'] === '1') {
    next();
  } else {
    res.status = 401;
    res.body = { message: 'Unauthorized' };
    endResponse(res);
  }
}

// Middleware function to handle the response
function handleResponse(req, res) {
  res.status = 200;
  res.body = { message: 'Request was successful' };
  endResponse(res);
}

// Function to end the response
function endResponse(res) {
  console.log(`Response Status: ${res.status}`);
  console.log(`Response Body: ${JSON.stringify(res.body)}`);
}

// Function to execute middleware chain
function executeMiddleware(req, res, middlewares) {
  let index = 0;

  function next() {
    if (index < middlewares.length) {
      const middleware = middlewares[index];
      index++;
      middleware(req, res, next);
    }
  }

  next();
}

// Example request and response objects
const req = {
  method: 'GET',
  url: '/data.json',
  headers: {
    'x-custom-header': 'your-secret-value'
  }
};

const res = {};

const middlewares = [logRequest, checkHeader, handleResponse];
executeMiddleware(req, res, middlewares);
  
