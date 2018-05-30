var app = {
  init: function(){
    console.log('init');

    //Création des flèches de nav
    app.creatArrows();

    //Lancer la lecture du slider, la logique du Slider
    app.playSlider();
  },
  //Lancer la lecture du slider
  playSlider: function(){
    console.log('play');
    //Toues les 5s, je dois identifier l'image suivante
    app.timer = setInterval(app.getNextImgage , 5000);
  },
  //identifier l'image suivant
  getNextImgage: function(){
    console.log('getNextImgage');
    //identifier l'image visible > usage de la class CSS active
    // var $currentImage = $('#slider-images .active');
    //réussir à trouver le prochain élément dans le DOM
    // var $nextImage = $currentImage.next();
    var $nextImage = $('#slider-images .active').next();

    if($nextImage.length === 0){
      //je repars de la 1
      $nextImage = $('#slider-images img').first();
    }
    app.showImage($nextImage);
  },
  //identifier l'image prec
  getPrevImgage: function(){
    var $prevImage = $('#slider-images .active').prev();
    if($prevImage.length === 0){
      //je repars de la 1
      $prevImage = $('#slider-images img').first();
    }
    app.showImage($prevImage);
  },
  //Afficher l'image voulue
  showImage: function($img){
    console.log('show');
    //masquer l'image courante
    $('#slider-images .active').fadeOut().removeClass('active');
    //J'affiche l'image demandée
    $img.fadeIn().addClass('active');
  },
  //création des Flèches
  creatArrows: function(){
    console.log('arrows');
    //crerr les flèches gauche et droite
    var $arrowLeft = $('<div>', {
      id: 'slider-left',
      class: 'slider-arrow'
    });

    var $arrowRight = $('<div>', {
      id: 'slider-right',
      class: 'slider-arrow'
    });

    $arrowRight.on('click',app.getNextImgage);
    $arrowLeft.on('click', app.getPrevImgage);
    //ajoute DOM
    //un élément DOM existant=> append  => un élément que je créer
    //un élément que je créé => appendTo  => un élément du DOM existant
    $('#slider').append( $arrowRight, $arrowLeft );
    //$arrowLeft.appendTo('#slide');
  },
};
$(app.init);
