const pass = document.querySelector('.pass')
const email = document.querySelector('.email')
const logbutton = document.querySelector('.Login')

const local = localStorage.getItem('Infoarray')
const parseLoc = JSON.parse(local)
console.log(local)
const len = parseLoc.length

let loginarr =[]

if (local !== null) {
  try {
    const data = JSON.parse(local)
    // Ensure data is an array; if not, reset to empty array
    loginarr = Array.isArray(data) ? data : []
  } catch (e) {
    console.error('Error parsing localStorage data:', e)
    loginarr = [] // Reset to empty array if JSON is invalid
  }
}

function checkmail(){
  let isFound = false
  for (let i=0; i<len; i++){
    if (email.value == parseLoc[i].email){
      isFound = true
      break
    }
  }
  if (isFound){
    return true
  }
}

function checkpass(){
  let isFound = false
  for (let i=0; i<len; i++){
    if (email.value == parseLoc[i].email){
      if (pass.value == parseLoc[i].pass){
        isFound = true
        break
      }
    }
  }
  if (isFound){
    return true
  }
}

logbutton.addEventListener('click', ()=>{
  const isEmailValid = checkmail()
  const isPassValid = checkpass()

  if (isEmailValid && isPassValid){
    let matchedUser = parseLoc.find(item => item['email'] == email.value && item['pass'] == pass.value)
    if (matchedUser){
      let logininfo = {
        'data': matchedUser
      }
      localStorage.setItem('loginarr', JSON.stringify(logininfo))
      window.location.href = 'http://127.0.0.1:3000/index.html'
    }
    else{
      alert('No matching user found')
    }

  }
  else{
    if (!isEmailValid){
      alert('check mail')
    }
    else{
      alert('check password')
    }
  }
})
