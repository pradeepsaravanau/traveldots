const signupForm = document.querySelector('#signup-form');
let contactInfo = firebase.database().ref("booking_status");
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  const email = signupForm['email'].value;
  const members = signupForm['members'].value;
  const date = signupForm['date'].value;
  const time = signupForm['time'].value;
  const place = signupForm['place'].value; 

    saveContactInfo(email, members,date ,time ,place);
    alert("booking successfull!!!");
    window.location.href = 'index.html';
    
    
})
function saveContactInfo(email, members,date ,time ,place) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    email_id: email,
    date_of_travel: date,
    number_of_members: members,
    time_of_travel :time,
    place: place,
  });
}
