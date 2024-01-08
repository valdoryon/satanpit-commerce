module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  const VALID_KEYS = process.env.API_KEYS;

  if (!apiKey || !VALID_KEYS?.includes(apiKey)) {
    return res.status(401).send({
      success: false,
      error: 'Access denied.',
    });
  }

  next();
};
