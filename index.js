let logintext = document.querySelector('.log-text');
let logindiv = document.querySelector('.login');
let storedData = localStorage.getItem('loginarr');
let carosel = document.querySelector('.carousel');
let carouseldiv = document.createElement('div');

const parseStd = JSON.parse(storedData);
let divi = document.createElement('div');
if (parseStd){
  logintext.style.display = 'none';
  divi.innerHTML = `
  <div class="account-container">
    <p class='account'>Account <span class="dropdown-arrow">▼</span></p>
  </div>
  `;
  logindiv.appendChild(divi);
}

let acc = logindiv.querySelector('.account');

let tooltipDiv = document.createElement('div');
tooltipDiv.className = 'account-dropdown';
tooltipDiv.innerHTML = `
  <div class="dropdown-header">
    <h3>My Account</h3>
  </div>
  <ul class="dropdown-menu">
    <li>My Orders</li>
    <li>Saved Addresses</li>
    <li>E-Gift Cards</li>
    <li>FAQ's</li>
    <li>Account Privacy</li>
    <li class="logout">Log Out</li>
  </ul>
`;
tooltipDiv.style.display = 'none';
logindiv.appendChild(tooltipDiv);

if (acc) {
  acc.addEventListener('click', (event) => {
    event.stopPropagation();
    
    if (tooltipDiv.style.display === 'none' || tooltipDiv.style.display === '') {
      tooltipDiv.style.display = 'block';
    } else {
      tooltipDiv.style.display = 'none';
    }
  });
}

document.addEventListener('click', (event) => {
  if (!tooltipDiv.contains(event.target) && event.target !== acc) {
    tooltipDiv.style.display = 'none';
  }
});

const logoutBtn = tooltipDiv.querySelector('.logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    logintext.style.display = 'block';
    divi.style.display = 'none';
    tooltipDiv.style.display = 'none';
    localStorage.removeItem('loginarr');
  });
}