let names = document.querySelector('.name')
let pass = document.querySelector('.pass')
let email = document.querySelector('.email')
let signbutton = document.querySelector('.Signup')

let infoarr = []

let local = localStorage.getItem('Infoarray')

if (local !== null) {
  try {
    const data = JSON.parse(local)

    infoarr = Array.isArray(data) ? data : []
  } catch (e) {
    console.error('Error parsing localStorage data:', e)
    infoarr = [] 
  }
}

function checkname(){
  if (names.value === "" || names.value === null  ){
    return false
  }
  return true
}
function checkmail(){
  return email.value.endsWith('@email.com')
}
function checkpass(){
  const passlist = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '1234567890',
    '!@#$&'
  ]
  let small = false
  let big = false
  let no = false
  let special = false

  for (let i=0; i < pass.value.length; i++){
    let char = pass.value[i];
    
    if (passlist[0].includes(char)) {
      small = true;
    } else if (passlist[1].includes(char)) {
      big = true;
    } else if (passlist[2].includes(char)) {
      no = true;
    } else if (passlist[3].includes(char)) {
      special = true;
    }
  }
  // if (!small){
  //   alert('Enter a small alphabet')
  // }
  // if (!big){
  //   alert('Enter a capital alphabet')
  // }
  // if (!no){
  //   alert('Enter a number')
  // }
  // if (!special){
  //   alert('Enter a special character')
  // }
  if (pass.value){
    return true
  }


  // return small && big && no && special;
}

signbutton.addEventListener('click', (e)=>{
  e.preventDefault()

  let low = email.value.toLowerCase();

  let isNameValid = checkname()
  let isEmailValid = checkmail()
  let isPassValid = checkpass()

  if (!isEmailValid && !isNameValid && !isPassValid){
    alert('Enter valid info')
    return
  }

  if (!isEmailValid && !isPassValid){
    alert('Enter valid email and password')
    return
  }
  if (!isNameValid && !isEmailValid){
    alert('Enter valid name and email')
    return
  }
  if (!isPassValid && !isNameValid){
    alert('Enter valid password and name')
    return
  }

    let info = {
      'email':low,
      'pass':pass.value,
      'namehe':names.value
    }
    infoarr.push(info)
    localStorage.setItem("Infoarray", JSON.stringify(infoarr))
    
    window.location.href = 'https://he11oowor1d.github.io/blinkithtmlcss/login.html'
  
  
  
})


