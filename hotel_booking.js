const signupForm = document.querySelector('#signup-form');
let contactInfo = firebase.database().ref("hotel_booking");
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  const email = signupForm['email'].value;
  const members = signupForm['members'].value;
  const date = signupForm['date'].value;
  const time = signupForm['time'].value;
  const hotel = signupForm['hotel_name'].value; 

    saveContactInfo(email, members,date ,time ,hotel);
    alert("hotel_booking successfull!!!");
    window.location.href = 'index.html';
    
    
})
function saveContactInfo(email, members,date ,time ,hotel) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    email_id: email,
    date_of_visiting: date,
    number_of_members: members,
    time_of_visiting :time,
    restaurant :hotel,
  });
}
