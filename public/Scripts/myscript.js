import { fetchData, setCurrentUser, getCurrentUser } from './main.js'

const petregister = document.getElementById("petregister");
if(petregister) petregister.addEventListener('submit', displayPetregister);

const notepage = document.getElementById("notepage");
if(notepage) notepage.addEventListener('submit', displayNote);

const petlogin = document.getElementById("petlogin");
if(petlogin) petlogin.addEventListener('submit',displayLogin);


function displayPetregister(e) {
  e.preventDefault();

  let userName = document.getElementById("fname").value;
  let petName = document.getElementById("pname").value;
  let emailId = document.getElementById("email").value;
  let password = document.getElementById("psw").value;
  let user = new User(userName, petName, emailId,password);
  console.log(user);

  fetchData("users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    console.log(data);
    window.location.href = "notepage.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 


}

function displayNote(e) {
    e.preventDefault();
    let object = getCurrentUser();
    let userID = object.userID;
    let emailId = object.emailId;
    let noteContent = document.getElementById('textnote').value;
    let notepage = new Note(userID,emailId,noteContent);
    console.log(notepage);
    fetchData("note/registernote", notepage, "POST")
    
    .then((data) => {
      window.location.href = "notepage.html";
  
  
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    }) 
  }

function displayLogin(e) {
    e.preventDefault();

    let emailId = document.getElementById("uname").value;
    let password = document.getElementById("psw").value;
    let user = new User(null,null,emailId,password);
    console.log(user);

    fetchData("users/login", user, "POST")
    .then((data) => {
    setCurrentUser(data);
    window.location.href = "notepage.html";

  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}

class Note {
    constructor(userID,emailId,noteContent) {
      this.userID = userID;
      this.emailId = emailId;
       this.noteContent = noteContent;
    }

    getNote()
    {
        return this.noteContent;
    }

    setNote()
    {
        this.noteContent=noteContent;
    }

    getId()
    {
      return this.userID;
    }

    setId()
    {
      this.userID = this.userID;
    }
    getMail()
    {
      return this.emailId;
    }
    setMail()
    {
      this.emailId = emailId;
    }


}

class User {
  constructor(userName, petName, emailId,password) {
    this.userName=userName;
    this.petName=petName;
    this.emailId=emailId;
    this.password=password;
  }

  getFirstName()
  {
    return this.userName;
  }

  getLastName()
  {
    return this.petName;
  }

  getEmail()
  {
    return this.emailId;
  }

  getPassword()
  {
    return this.password;
  }

  setPassword()
  {
    this.password=password;
  }

  setEmail()
  {
    this.emailId=emailId;
  }

  setFirstName()
  {
    this.userName=userName;
  }

  setPetName()
  {
    this.petName=petName;
  }
}




