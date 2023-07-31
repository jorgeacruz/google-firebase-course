// Defindo referências para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')


var loading = document.getElementById('loading')
var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')
var userEmail = document.getElementById('userEmail')
var sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
var emailVerified = document.getElementById('emailVerified')




// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register)
  showItem(access)
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access)
  showItem(register)
}

// Simpplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

// Simpplifica a remoção de elementos da página
function hideItem(element) {
  element.style.display = 'none'
}

//Mostrar conteudo ao usuário
function showUserContent(user){
  if( user.emailVerified == true ){
  hideItem(sendEmailVerificationDiv)
  emailVerified.innerHTML = 'Email Verificado'
  } else {
  showItem(sendEmailVerificationDiv)
  emailVerified.innerHTML = 'Email não Verificado '
  }
  userEmail.innerHTML = user.email
  hideItem(auth)
  showItem(userContent)
}

//Oculta conteudo ao usuário não autenticado
function showAuth(){
  hideItem(userContent)
  showItem(auth)

}

function signout(){
  firebase.auth().signOut()

  authForm.email.value = ''
  authForm.password.value = ''

}