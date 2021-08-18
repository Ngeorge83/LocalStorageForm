const storage = new Map();

const savePerson = () => {
  const fnameElement = document.getElementById("fname");
  const firstName = fnameElement.value;
  const lnameElement = document.getElementById("lname");
  const lastName = lnameElement.value;
  const addressElement = document.getElementById("address");
  const address = addressElement.value;
  const cityElement = document.getElementById("city");
  const city = cityElement.value;
  const provinceElement = document.getElementById("province");
  const province = provinceElement.value;
  const pcodeElement = document.getElementById("pcode");
  const pcode = pcodeElement.value;
  const phonenoElement = document.getElementById("phoneno");
  const phoneno = phonenoElement.value;
  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  const notesElement = document.getElementById("notes");
  const notes = notesElement.value;
  const durElement = document.getElementById("dur");
  const duration=durElement.value;

  function PostalCode(pcode) {
    const postalCodeRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i)
    ;

    return postalCodeRegex.test(pcode);
  }

  function phonenumber(phoneno) {
    var phone = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if (phoneno.match(phone)) {
      return true;
    } else {
      document.getElementById('error-phoneno').innerText="Phone number is not Valid!"
      errors=true;
    }
  }
  
 let errors=false;
  if (firstName == "" || firstName == null) {
    document.getElementById('error-fname').innerText="First Name is Required!"
    errors=true;
  }
   if(lastName == "" || lastName == null) {
    document.getElementById('error-lname').innerText="Last Name is Required!"
    errors=true;
  }
  if(address == "" || address == null)
  {
    document.getElementById('error-address').innerText="Address is Required!"
    errors=true;
  }
 if (city == "" || city == null) {
  document.getElementById('error-city').innerText="City is Required!"
  errors=true;
  } if (province == "" || province == null) {
    document.getElementById('error-province').innerText="Province is Required!"
    errors=true;
  } if (PostalCode(pcode) == false) {
    document.getElementById('error-pcode').innerText="Postal Code is not Valid!"
    errors=true;
  } if (phonenumber(phoneno) == false) {
    phonenumber(phoneno);
  }if(email == "" || email == null) {
    document.getElementById('error-email').innerText="Email is required!";
    errors=true;
  }if(notes == "" || notes == null) {
    document.getElementById('error-notes').innerText="Notes are required!";
    errors=true;
  }
  if(duration == "" || duration == null) {
    document.getElementById('error-duration').innerText="Duration is required!";
  }
  console.log(duration)
  if (errors) {
    console.log(errors);
  }
  else{


  const id = storage.size + 1;

  console.log(firstName);
  console.log(id);

  const person = {
    id,
    firstName,
    lastName,
    address,
    city,
    province,
    pcode,
    email,
    notes,
    duration
  };

  console.log(person);

  storage.set(id, person);
  displayPerson(person);
  showDiv("display");
}
};

const showDiv = (name) => {
  const homeElement = document.getElementById("home");
  const formElement = document.getElementById("form");
  const displayElement = document.getElementById("display");
  const searchElement = document.getElementById("search");
  const AboutElement =document.getElementById("ShowAboutButton");
  if (name === "home") {
    formElement.style.display = "none";
    homeElement.style.display = "block";
    displayElement.style.display = "none";
    searchElement.style.display = "none";
    AboutElement.style.display = "block";
  } else if (name === "display") {
    formElement.style.display = "none";
    homeElement.style.display = "none";
    displayElement.style.display = "block";
    searchElement.style.display = "none";
    AboutElement.style.display = "none";
  } else if (name === "form") {
    formElement.style.display = "block";
    homeElement.style.display = "none";
    displayElement.style.display = "none";
    searchElement.style.display = "none";
    AboutElement.style.display = "none";
  }else if (name === "About") {
    formElement.style.display = "none";
    homeElement.style.display = "none";
    displayElement.style.display = "none";
    searchElement.style.display = "none";
    AboutElement.style.display = "block"; 
  }else {
    formElement.style.display = "none";
    homeElement.style.display = "none";
    displayElement.style.display = "none";
    searchElement.style.display = "block";
    AboutElement.style.display = "none";
  }
};

const displayPerson = (person) => {
  const personElement = document.getElementById("person");
  personElement.innerHTML = `
  <p>Id: ${person.id}</p>
  <p>First Name: ${person.firstName}</p>
  <p>Last Name: ${person.lastName}</p>
  <p>Address: ${person.address}</p>
  <p>City: ${person.city}</p>
  <p>Province: ${person.province}</p>
  <p>Postal Code: ${person.pcode}</p>
  <p>Email: ${person.email}</p>
  <p>Notes: ${person.notes}</p>
  <p>Notes: ${person.duration}</p>
  `;
};

const myfunction = (id) => {
  const personElement = document.getElementById("id");
  storage.get(id);
  //displayPerson(id);
  personElement.innerHTML = `
  <p>Id: ${person.id}</p>
  <p>First Name: ${person.firstName}</p>
  <p>Last Name: ${person.lastName}</p>
  <p>Address: ${person.address}</p>
  <p>City: ${person.city}</p>
  <p>Province: ${person.province}</p>
  <p>Postal Code: ${person.pcode}</p>
  <p>Email: ${person.email}</p>
  <p>Notes: ${person.notes}</p>
  <p>Duration: ${person.duration}</p>
  `;
  showDiv("display");
};

const showList= () =>{
  const personElement = document.getElementById("id");
  let personid =storage.get(id);
  personElement.innerHTML = '';
  storage.forEach((personid) => {
    console.log(person);
    personElement.innerHTML += `
      <p>Id: ${person.id}</p>
      <p>First Name: ${person.firstName}</p>
      <p>Last Name: ${person.lastName}</p>
      <p>Address: ${person.address}</p>
      <p>City: ${person.city}</p>
      <p>Province: ${person.province}</p>
      <p>Postal Code: ${person.pcode}</p>
      <p>Email: ${person.email}</p>
      <p>Notes: ${person.notes}</p>
      <p>Duration: ${person.duration}</p>
      `;
    });
    console.log(personElement.innerHTML);
    showDiv('display');
  }
