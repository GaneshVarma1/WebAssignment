const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL,
    petName VARCHAR(255),
    emailId VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users);
  return await con.query(sql);

}

async function register(user) {
  let cUser = await getUser(user);
  console.log(cUser.length);
  if(cUser.length > 0) throw Error("UserID already in use");

  const sql= `INSERT INTO users (userID, userName,petName,emailId, password)
    VALUES (${user.userID}, "${user.userName}","${user.petName}","${user.emailId}","${user.password}");
  `
  await con.query(sql);
  return await login(user);
}

async function login(user) {
  let cUser = await getUser(user);
  if(!cUser[0]) throw Error("User not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");
  return cUser[0];
}

async function editUser(user) {
  let sql = `UPDATE users
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users
      WHERE userName = "${user.userName}"
  `;
  }
  return await con.query(sql);
}



module.exports = { getAllUsers, login, register, editUser, deleteUser};
