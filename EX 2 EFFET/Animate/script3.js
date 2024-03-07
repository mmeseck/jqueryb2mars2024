// La méthode animate() en jQuery est utilisée pour créer des animations personnalisées sur les propriétés CSS d'un élément HTML. Elle permet de modifier progressivement les valeurs des propriétés CSS au fil du temps, ce qui crée une animation fluide.


// $(selector).animate({params}, speed, easing, callback);

// selector : spécifie l'élément HTML à animer.
// params : un objet JavaScript contenant les propriétés CSS et leurs valeurs cibles.
// speed (optionnel) : la vitesse de l'animation en millisecondes ou une chaîne de mots-clés comme "slow" ou "fast".
// easing (optionnel) : spécifie la fonction d'accélération de l'animation.
// callback (optionnel) : une fonction à exécuter une fois que l'animation est terminée.


//1 Annimation box rouge se déplace sur la gauche
$(document).ready(function(){
    $("#box").animate({left: '250px'}, 2000);
});

// ******************
//2 box rouge animation simultané
$(document).ready(function(){
    $("#box2").animate({
        left: '250px',
        opacity: '0.5',
        height: '+=150px',
        width: '+=150px'
    }, 2000);
});