
//dd0a6c36d5f8c2d5e2fb0e1d6c52669c
let ville = "Schiltigheim";
recupererTemperature(ville);
// on appelle la fct poiur recupererTEmperature(ville)
let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
ville = prompt("Dans quelle ville souhaitez-vous connaitre la météo ?");
recupererTemperature(ville);
});

function recupererTemperature(ville){  
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + 
ville + '&appid=dd0a6c36d5f8c2d5e2fb0e1d6c52669c&units=metric';

let requete = new XMLHttpRequest();
requete.open('GET', url); 
requete.responseType = 'json';
requete.send(); 
// Dès qu'on reçoit une réponse, cette fonction est executée
requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; 
        let temperature = reponse.main.temp;// on regarde le json
        let ville       = reponse.name;
        //on va regarder notre code HTML est reprendre l'ID
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector ('#ville').textContent = ville;
        //console.log(reponse);

        }else{
     alert('Un problème est intervenu, merci de revenir plus tard');
        }
    }
};
}
//Key	Name	
//dd0a6c36d5f8c2d5e2fb0e1d6c52669c