const { trimStr } = require("./utils");

let users = [];
const findUser = (user) => {
  const userName = trimStr(user.name);
  const userRoom = trimStr(user.room);

  return users.find(
    (user) => trimStr(user.name) === userName && trimStr(user.room) == userRoom
  );
};

const getRoomUsers = (room) => users.filter((user) => user.room === room);

const addUser = (user) => {
  const isExist = findUser(user);
  !isExist && users.push(user);

  const currentUser = isExist || user;
  return { isExist: !!isExist, user: currentUser };
};

const remuveUser = (user) => {
  const found = findUser(user);
  if (found) {
    users = users.filter(
      ({ room, name }) => room === found.room && name !== found.name
    );
  }
  return found
};

module.exports = { addUser, findUser, getRoomUsers, remuveUser};
