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

var passwordReset = document.getElementById('passwordReset')

// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register) // esconder atalho registro
  hideItem(passwordReset) // esconder passwordReset
  showItem(access) // mostrar atalho para acesso
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access) 
  showItem(passwordReset)
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
// função de deslogar
function signout(){
  firebase.auth().signOut()

  authForm.email.value = ''
  authForm.password.value = ''

}
//função de redefinir senha
function sendPasswordResetEmail(){
  var email = prompt('Redefinição de senha de email', authForm.email.value)
  if(email){
    showItem(loading)
    firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
    .then(function(){
      alert('Email de redefinição de senha' + email + '.');
    })
    .cacth(function(error){
      alert('Erro ao enviar o email de redefinição de senha')
      console.log(error)
    }).finally(function(){
      hideItem(loading)
    }) 
  } else {
    alert('Precisa preencher o campo de email');
  }
}