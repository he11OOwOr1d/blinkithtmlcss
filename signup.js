const names = document.querySelector('.name')
const pass = document.querySelector('.pass')
const email = document.querySelector('.email')
const signbutton = document.querySelector('.Signup')

let infoarr = []

const local = localStorage.getItem('Infoarray')

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
  if (names.value === ""){
    alert('info daalo sir')
    return false
  }
  return true
}
function checkmail(){
  if (!email.value.includes('@email.com')){
    alert('check your email')
    return false
  }
  return true
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
    const char = pass.value[i];
    
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
  if (!small){
    alert('Enter a small alphabet')
  }
  if (!big){
    alert('Enter a capital alphabet')
  }
  if (!no){
    alert('Enter a number')
  }
  if (!special){
    alert('Enter a special character')
  }

  return small && big && no && special;
}

signbutton.addEventListener('click', ()=>{
  const isNameValid = checkname()
  const isEmailValid = checkmail()
  const isPassValid = checkpass()

  if (isEmailValid && isNameValid && isPassValid){
    let info = {
      'email':email.value,
      'pass':pass.value,
      'namehe':names.value
    }
    infoarr.push(info)
    localStorage.setItem("Infoarray", JSON.stringify(infoarr))
    
    window.location.href = 'http://127.0.0.1:3000/login.html'
  }
})