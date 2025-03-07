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

acc.addEventListener('mouseover',(event)=>{
  console.log("this is it : ",parseStd.data['namehe'])
  let {username,emails,pass}=parseStd.data
  // console.log('clicked')
  let tooltipDiv = document.createElement('div');
    tooltipDiv.innerHTML = `
      <p>Name: ${parseStd.data['namehe']}</p>
      <p>Email: ${parseStd.data['email']}</p>
      <p>My Orders</p>
      <p>Saved Address</p>
      <p>FAQ</p>
      <p>Account Privacy</p>
    `;
    
    // Add some basic styling to make the tooltip look nice
    tooltipDiv.style.position = 'absolute';
    tooltipDiv.style.backgroundColor = 'black';
    tooltipDiv.style.color = 'white';
    tooltipDiv.style.padding = '5px';
    tooltipDiv.style.borderRadius = '3px';
    
    // Position the tooltip near the mouse
    tooltipDiv.style.left = `${event.pageX + 10}px`;
    tooltipDiv.style.top = `${event.pageY + 10}px`;
    
    // Add a class for potential additional styling
    tooltipDiv.classList.add('tooltip');
    
    // Append the tooltip to the body
    document.body.appendChild(tooltipDiv);
    
    // Remove the tooltip when the mouse leaves
    acc.addEventListener('mouseout', () => {
        document.body.removeChild(tooltipDiv);
    }, { once: true });
})

