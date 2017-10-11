module.exports = function getShortMessages(messages) {
  return messages
    .filter(messageObj => messageObj.message.length < 50)
    .map(messageObj => messageObj.message);
};
