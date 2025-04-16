let logintext = document.querySelector('.log-text')
let logindiv = document.querySelector('.login')
let storedData = localStorage.getItem('loginarr');
let carosel = document.querySelector('.carousel')
let carouseldiv = document.createElement('div')

const parseStd = JSON.parse(storedData)
let divi = document.createElement('div')
if (parseStd){
  logintext.style.display ='none'
  divi.innerHTML = `
  <div>
   <p class='account'>My Account</p>
    <span class='logOut'>Log Out<span>
  <div>
  `
  logindiv.appendChild(divi);
}

let logoutbutton = logindiv.querySelector('.logOut')
let acc = logindiv.querySelector('.account')

logoutbutton.addEventListener('click',()=>{
  logintext.style.display = 'block'
  divi.style.display ='none'
  localStorage.removeItem('loginarr')
})

let tooltipDiv = document.createElement('div');
tooltipDiv.innerHTML = `
  <p>Name: ${parseStd.data['namehe']}</p>
  <p>Email: ${parseStd.data['email']}</p>
  <p>My Orders</p>
  <p>Saved Address</p>
  <p>FAQ</p>
  <p>Account Privacy</p>
`;
logindiv.appendChild(tooltipDiv);

acc.addEventListener('click', (event) => {
  event.stopPropagation(); 
  
  if (tooltipDiv.style.display === 'none') {
    tooltipDiv.style.display = 'block';
  } else {
    tooltipDiv.style.display = 'none';
  }
});

document.addEventListener('click', (event) => {
  if (!tooltipDiv.contains(event.target) && event.target !== acc) {
    tooltipDiv.style.display = 'none';
  }
});

