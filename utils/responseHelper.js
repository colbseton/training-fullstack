const sendResponse = (res, toSend) => {
  const { CODE, MESSAGE } = toSend;
  return res.status(CODE).json({
    message: MESSAGE,
    code: CODE
  });
};

module.exports = { sendResponse };
