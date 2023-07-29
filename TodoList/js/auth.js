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
      })
  
    }
  }
  // Verifica se user esta ou não autenticado
  firebase.auth().onAuthStateChanged(
    function(user){
      hideItem(loading)
      if(user){
        showUserContent()
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