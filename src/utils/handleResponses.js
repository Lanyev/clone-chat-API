//? For successful responses
const success = ({ status, data, message, res }) => {
  res.status(status).json({
    error: false,
    status,
    message,
    data,
  });
};

//? For error responses
const error = ({ status, data, message, res, fields }) => {
  res.status(status).json({
    error: true,
    status,
    message,
    fields,
    data,
  });
};

module.exports = {
  success,
  error,
};
