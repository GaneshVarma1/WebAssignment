const petregister = document.getElementById("petregister");
if(petregister) petregister.addEventListener('submit', displayPetregister);

const notepage = document.getElementById("notepage");
if(notepage) notepage.addEventListener('submit', displayNote);

const petlogin = document.getElementById("petlogin");
if(petlogin) petlogin.addEventListener('submit',displayLogin);

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
