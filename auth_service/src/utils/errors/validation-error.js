const AppError = require("./error-handel");

class validationError extends AppError {
  constructor(error) {
    let explation = [];
    error.errors.forEach((err) => {
      explation.push(err.message);
    });
    super(
      error.name,
      "Not able to validate the data sent in the request",
      explation,
      290
    );
  }
}

module.exports = validationError;
