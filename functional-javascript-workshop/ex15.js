module.exports = function loadUsers(userIds, load, done) {
  const users = [];
  const numUsers = userIds.length;
  let numLoadedUsers = 0;
  userIds.forEach((userId, index) => load(userId, user => {
    users[index] = user;
    ++numLoadedUsers;
    if (numLoadedUsers === numUsers) {
      return done(users);
    }
  }));
};
