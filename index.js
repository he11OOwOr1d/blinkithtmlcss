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

acc.addEventListener('click', () => {
  console.log('click')
  let tooltipDiv = document.createElement('div');
  tooltipDiv.innerHTML = `
    <p>Name: ${parseStd.data['namehe']}</p>
    <p>Email: ${parseStd.data['email']}</p>
    <p>My Orders</p>
    <p>Saved Address</p>
    <p>FAQ</p>
    <p>Account Privacy</p>
  `;
  
  
});

// let textdiv = document.createElement('div')
// let info = document.createElement('p')
// info.innerText = 'hi'
// textdiv.appendChild(p)
// hidiv.appendChild(textdiv)