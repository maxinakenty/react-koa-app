const errorHandler = () => async (ctx, next) => {
  try {
    await next();
  } catch ({ status = 500, message = 'Server Error', name, errors }) {
    // if the error is from mongo.
    if (name === 'ValidationError') {
      ctx.status = 400;
      ctx.body = {
        errors: Object.values(errors).reduce(
          (acc, error) => ({ ...acc, [error.path]: error.message }),
          {},
        ),
      };
    } else {
      // if the error is not from mongo.
      ctx.status = status;
      ctx.body = { status, message };
    }
  }
};

export default errorHandler;
