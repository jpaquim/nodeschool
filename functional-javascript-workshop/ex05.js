module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(submittedUser => {
      return goodUsers.some(goodUser => goodUser.id === submittedUser.id);
    });
  };
};
