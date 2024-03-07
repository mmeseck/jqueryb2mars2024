$(function(){

    //   ************************************ Les selecteurs **********************************
    
    //pour sélectionner un élément en jquery on utilisera les selecteur css
    
    //Sélection par nom de balise
    // $("p").hide(5000);
    
    //Sélection par class
    
    // $(".p2").hide(5000);
    
    //Sélection par id
    // $("#p3").hide(7000);
    
    
    //Sélection tous les liens
    // $("a").hide(7000);
    
    //selecteur universel
    // $("*").hide(7000);
    
    //pseudo sélecteur
    //supprime le premier paragraphe de la page
    // $("p:first").hide(7000);
    
    //supprime le premier paragraphe de la page
    // $("p:last").hide(7000);
    
    // Selectionner un input
    // $("input[name=pseudo]").hide(7000);
    
    //filter des éléments
    //$("li:not('.deuxpattes')").hide('7000');
    
    //   ************************************ Modification du contenu**********************************
    //Modifier le texte d'un élément
    $("h1").text("Cours jquery c'est génial");
    
    //Modifier le texte et la balise d'un élément 
    // $(".p2").html("<h1>COUCOU TOI </h1>");
    
    
    //Changer la couleur d'un élément
    // $("h1").css('color' , 'red');
    $("p").css('backgroundColor' , 'yellow');
    
    //Ajouter une classe 
    $("h1").addClass('centre')
    
    
    //supprimer  une classe 
    $(".p2").addClass('centre');
    $(".p2").removeClass('centre')
    
    //Supprimer la classe si elle est présente
    //et si la classe est présente elle l'ajoute
    $("h1").toggleClass('centre')
    $("h1").toggleClass('centre')
    
    //Ecrire un élément juste avant un autre
    $("h2").prepend("Hello Paul ")
    
    //Ecrire un élément juste après un autre
    $("h2").append(" sur mon site ")
    
    //Ajouter un attribut
    
     $("h2").attr('class', 'centre');
    
    //Modifier  un attribut
     $("h2").attr('style', 'color : orange');
    
     //Changer la dirrection d'un lien
    
    $("a").attr('href' , 'https://cdn.pixabay.com/photo/2019/10/11/16/56/cat-4542301_640.jpg');
    
    
    
    //   ************************************ Les évènements*****************
    
    
    //Réagir a un click sur un bouton
    $(".btn1").on("click" , function(){
        $("h1").hide();
    });
    
    //Réagir a un double click sur une liste le titre 
    //a un bakground qui devient rouge
    $("ul").on("dblclick" , function(){
        $("h1").css('backgroundColor' , 'red');
    })
    
    
    //au survole de la liste le backound devient jaune
    $("ul").on("mouseover" , function(){
        $("ul").css('backgroundColor' , 'yellow');
    })
    
    //quand i=on quitte la liste le background devient blanc
    $("ul").on("mouseleave" , function(){
        $("ul").css('backgroundColor' , 'white');
    })
    
    
    //Récupérer le valeur d'un input
    
    $("#btnaffich").on("click" , function(){
        let valeurInput = $("#inputAffich").val();
        $("#inputAffich").val( ' ');
        $("#resultat").text("Vous avez écrit : " + valeurInput );
    
    });
    
    
    
    //   ************************************ Les effets*****************
    
    //Afficher un élément qui est cachée
    // $("#btnaffich").on("click" , function(){
    //         $("h2").show(5000);
    
    // });
    
    // toggle = .hide()+ .show()
    //Si l'ément est caché il fait apparaître l'élément
    //Si l'élément est visible il le cahe
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").toggle(5000);
    
    // });
    
    
    //Effet de fondu apparait progressivement
    // $("h2").hide();
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").fadeIn(5000);
    
    // });
    
    
    //Effet de fondu disparait progressivement
    // $("h2").show();
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").fadeOut(5000);
    
    // });
    
    
    //Effet de fondu apparait progressivement s'il est caché
    // et disparait progressivement s'il est affiché
    // $("h2").show();
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").fadeToggle(5000);
    
    // });
    
    
    //Effet de glissement l'élément remontte
    // $("h2").show();
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").slideUp(5000);
    
    // });
    
    
    //Effet de glissement l'élément descend
    // $("h2").show();
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").slideDown(5000);
    
    // });
    
    
    
    //Effet de glissement l'élément descend s'il est replié et il remonte s'il est déplié
    // $("h2").show();
    
    // $("#btnaffich").on("click" , function(){
    //     $("h2").slideToggle(5000);
    
    // });
    


      //   ************************************ Les annimations*****************
    
    $("h1").animate({
        fontSize : "30px",
        height: "1200px"
    }, {
    duration : 3000
    }
    )
    
    
    
    });
    
    
    
    