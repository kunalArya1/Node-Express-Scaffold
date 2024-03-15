// Approach First

const ApiHandler = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (err) {
      err(next);
    }
  };
};

// Approach Second

const ApiHandler2 = (func) => {
  return async (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { ApiHandler };
