const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    userID INT NOT NULL,
    emailId VARCHAR(255) NOT NULL,
    noteContent VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(noteID)
  ); `
  await con.query(sql);
}
createTable();

async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes);
  return await con.query(sql);

}

async function getNote(note) {
  console.log(note);

  let sql = `
    SELECT * FROM notes
      WHERE emailId = "${note.emailId}"
  `;
  console.log(sql);

  return await con.query(sql);
}

async function registerNote(note) {
    const sql= `INSERT INTO notes ( userID,emailId,noteContent)
    VALUES (${note.userID}, "${note.emailId}","${note.noteContent}");
  `
  console.log(note);
  await con.query(sql);
  return await getNote(note);

}

async function editNote(note) {
  let sql = `UPDATE notes
    SET noteContent = "${note.noteContent}"
    WHERE noteID = ${note.noteID}
  `;

  return await con.query(sql);
  // let updateNote = await getNote(note);
  // return updatedUser[0];
}

async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}
  `
  await con.query(sql);
}




module.exports = { getAllNotes, editNote, deleteNote,registerNote, getNote};
