const petregister = document.getElementById("petregister");
if(petregister) petregister.addEventListener('submit', displayPetregister);

const notepage = document.getElementById("notepage");
if(notepage) notepage.addEventListener('submit', displayNote);

const petlogin = document.getElementById("petlogin");
if(petlogin) petlogin.addEventListener('submit',displayLogin);

const userBtn=document.getElementById('user-button');
if(userBtn) userBtn.addEventListener('click',getUsers);

const noteBtn=document.getElementById('noteBtn');
if(noteBtn) noteBtn.addEventListener('click',getNote);


function displayPetregister(e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let pname = document.getElementById("pname").value;
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;
  let user = new User(fname, pname, email,psw);
  console.log(user);

}

function displayNote(e) {
    e.preventDefault();

    let textnote = document.getElementById('textnote').value;
    let notepage = new Note(textnote);
    console.log(notepage);
}

function displayLogin(e) {
    e.preventDefault();

    let fname = document.getElementById("uname").value;
    let psw = document.getElementById("psw").value;
    let user = new User(null,null,fname,psw);
    console.log(user);

}

class Note {
    constructor(textnote) {
       this.textnote = textnote;
    }

    getNote()
    {
        return this.textnote;
    }

    setNote()
    {
        this.textnote=textnote;
    }


}

class User {
  constructor(fname, pname, email,psw) {
    this.fname=fname;
    this.pname=pname;
    this.email=email;
    this.psw=psw;
  }

  getFirstName()
  {
    return this.fname;
  }

  getLastName()
  {
    return this.pname;
  }

  getEmail()
  {
    return this.email;
  }

  getPassword()
  {
    return this.psd;
  }

  setPassword()
  {
    this.psw=psw;
  }

  setEmail()
  {
    this.email=email;
  }

  setFirstName()
  {
    this.fname=fname;
  }

  setLastName()
  {
    this.pname=pname;
  }
}


function getUsers() {
  fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data)=> {
    let ul=document.getElementById("tab");
    data.forEach((user) => {
    let newNode=document.createElement('tr');
   let childNode0=document.createElement('td');
   let childNode1=document.createElement('td');
   let childNode2=document.createElement('td');
   let childNode3=document.createElement('td');
   let childNode4=document.createElement('td');
   let text0=document.createTextNode(user.userId);
   let text=document.createTextNode(user.userName);
   let text1=document.createTextNode(user.petName);
   let text2=document.createTextNode(user.emailId);
   let text3=document.createTextNode(user.password);
   childNode0.appendChild(text0);
   childNode1.appendChild(text);
   childNode2.appendChild(text1);
   childNode3.appendChild(text2);
   childNode4.appendChild(text3);
   newNode.appendChild(childNode0);
   newNode.appendChild(childNode1);
   newNode.appendChild(childNode2);
   newNode.appendChild(childNode3);
   newNode.appendChild(childNode4);
   ul.appendChild(newNode);
  }
)
})
      .catch((err)=>console.log(`Error! ${err}`));

}
function getNote() {
  fetch("http://localhost:3000/note")
  .then((res) => res.json())
  .then((data)=> {
    let ul=document.getElementById("tab");
    console.log('hi');
    data.forEach((notes) => {
    let newNode=document.createElement('tr');
    let childNode0=document.createElement('td');
    let childNode1=document.createElement('td');
    let childNode2=document.createElement('td');
    let text=document.createTextNode(notes.userId);
    let text1=document.createTextNode(notes.noteId);
    let text2=document.createTextNode(notes.noteContent);
    childNode0.appendChild(text);
    childNode1.appendChild(text1);
    childNode2.appendChild(text2);
    newNode.appendChild(childNode0);
    newNode.appendChild(childNode1);
    newNode.appendChild(childNode2);
    ul.appendChild(newNode);
    console.log(notes);
  }
)
})
  .catch((err)=>console.log(`Error! ${err}`));
}
