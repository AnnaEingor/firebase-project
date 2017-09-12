myApp.controller('loginCtrl', function($scope){

    var uiConfig = {  
        signInSuccessUrl: 'pageLogin.html',  
        signInOptions: [  
         // Указываем провайдеров для Firebase Аутентификации
         firebase.auth.GoogleAuthProvider.PROVIDER_ID,  
         firebase.auth.EmailAuthProvider.PROVIDER_ID  
        ],  
        // Здесь вы можете специфировать условия к использованию, которые будут показаны при виджете 
        tosUrl: '<your-tos-url>'  
       };  
       
       // Инициализирум FirebaseUI виджет   
       var ui = new firebaseui.auth.AuthUI(firebase.auth());  
       // Для начала методы мы подождем пока html полностью загрузиться
       ui.start('#firebaseui-auth-container', uiConfig);  

    var currentUid = null;  
    firebase.auth().onAuthStateChanged(function(user) {  
     // Слушатель onAuthStateChanged срабатывает каждый раз когда токен пользователя меняется
     // Это может случиться когда уже новый пользователь логинится, например.
     // Или это также может случиться когда токен пользователя истек
     if (user && user.uid != currentUid) {  
       // Обноваляем UI когда новый пользователь логинится
       // В другом случае игнорируем если это обновление токена
       // Обновляем UID текущего пользователя 
      currentUid = uid;  
     } else {  
       // Операция выхода из приложения. Переустанавливает UID текущего пользователя
      currentUid = null;  
     }  
    });  
})