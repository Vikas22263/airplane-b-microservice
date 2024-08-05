class AppErrors extends Error() {
  constructor(
    name = "AppError",
    message = "Something went wrong",
    explation = "Something went wrong",
    statusCode = "400"
  ) {
    super();
    (this.message = message),
      (this.explation = explation),
      (this.name = name),
      (this.statusCode = statusCode);
  }
}
module.exports = AppErrors;
