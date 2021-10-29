
//dd0a6c36d5f8c2d5e2fb0e1d6c52669c
let ville = 'Schiltigheim';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dd0a6c36d5f8c2d5e2fb0e1d6c52669c&units=metric';

//console.log(url);

let requete = new XMLHttpRequest();
requete.open('GET', url); 
requete.responseType = 'json';
requete.send(); 

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; 
        console.log(reponse);

        }
    else{
     alert('Un problème est intervenu, merci de revenir plus tard');
        }
    }
}
//Key	Name	
//dd0a6c36d5f8c2d5e2fb0e1d6c52669c