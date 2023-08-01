//traduz para portugues a autenticaçao
firebase.languageCode = 'pt-BR'

// tratamento dos dados do formulário de acesso
authForm.onsubmit = function (event) {
    event.preventDefault()
    showItem(loading)
    if (authForm.submitAuthForm.innerHTML == 'Acessar') {
      firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value)
      .catch(function (error) {
        console.log('Falha no acesso')
        console.log(error)
      })
    } else {
      firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value)
      .catch(function (error) {
        console.log('Falha no cadastro')
        alert('Erro ao Cadastrar')
      }).finally(function(){
        hideItem(loading)
      })
  
    }
  }
  // Verifica se user esta ou não autenticado
  firebase.auth().onAuthStateChanged(
    function(user){
      hideItem(loading)
      if(user){
        showUserContent(user)
      } else {
        showAuth()
      }
    }
  )
  
  // função de SignOut 
  firebase.auth().signOut().catch(
    function(error){
      console.log('Falha ao sair da conta')
      console.log(error)
    }
  )

  //funçao usuario verificar email
  function sendEmailVerification(){
    showItem(loading)
    var user = firebase.auth().currentUser
    user.sendEmailVerification()
    .then( function() {
      alert('Email de verificação foi enviado para' + user.email + 'Verifique sua caixa de entrada');
    })
    .catch(function(error) {
      alert('Error ao enviar a mensagem de verificação');
      console.log(error)
    }).finally(function(){
      hideItem(loading)
    })
  }