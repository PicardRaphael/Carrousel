var app = {
  init: function() {
    console.log('app init');

    // Creation des miniatures
    app.createThumbnails();

    // Creation des fleches de navigation
    app.createArrows();

    // Lancer la lecture du slider, la logique du slider
    app.playSlider();
  },
  // Lancer la lecture du slider
  playSlider: function() {
    console.log('play');
    // Toutes les 5 secondes, je dois identifier l'image suivante
    app.timer = setInterval(app.getNextImage, 5000);
  },
  // Identification de l'image suivante
  getNextImage: function() {
    console.log('getNextImage');

    // Option verbeuse
    // identifier l'image visible > usage de la class CSS active
    // var $currentImage = $('#slider-images .active');
    // réussir à trouver le prochain élément dans le DOM
    // var $nextImage = $currentImage.next();

    var $nextImage = $('#slider-images .active').next();

    // - SI l'image suivante est vide
    // - ALORS je repars de la première

    if ($nextImage.length === 0) {
      $nextImage = $('#slider-images img').first();
    }

    app.showImage($nextImage);

  },
  // Identification de l'image précédente
  getPrevImage: function() {
    console.log('getPrevImage');

    var $prevImage = $('#slider-images .active').prev();

    // Si l'image précédente ne contient rien
    if ($prevImage.length === 0) {
      $prevImage = $('#slider-images img').last();
    }

    app.showImage($prevImage);
  },
  // Afficher l'image voulue
  showImage: function($img) {
    console.log('show');

    // masquer l'image courante
    $('#slider-images .active').fadeOut().removeClass('active');

    // j'affiche l'image demandée
    $img.fadeIn().addClass('active');
  },
  // Création des flèches
  createArrows: function() {
    console.log('arrows');
    // creer les fleches gauche et droite
    // <div id="slider-left" class="slider-arrow"></div>
    var $arrowLeft = $('<div>', {
      id: 'slider-left',
      class: 'slider-arrow',
    });

    var $arrowRight = $('<div>', {
      id: 'slider-right',
      class: 'slider-arrow',
    });

    $arrowLeft.on('click', app.getPrevImage);
    $arrowRight.on('click', app.getNextImage);

    // Ajouter au DOM les flèches
    // un élément DOM existant -> append -> un élément que je crée
    // un élément que je crée -> appendTo -> un élément du DOM existant
    $('#slider').append($arrowLeft, $arrowRight);

  },
  // Création des miniatures
  createThumbnails: function() {
    console.log('thumbnails');
    // Container pour les miniatures
    var $thumbs = $('<div>', {
      id: 'slider-thumbs',
    });

    // Je dois me calquer / me baser sur le DOM (les images) pour générer les miniatures
    $('#slider-images img').each(function(index, element) {

      // console.log(index, element);
      var $currentImage = $(element);

      // console.log($currentImage);
      var srcCurrentImg = $currentImage.attr('src');

      // Création des miniatures avec l'aide de src
      $('<img>', {
        src: srcCurrentImg
      }).appendTo($thumbs);

      // Alternative avec append
      // var $thumb = $('<img>', {
      //   src: srcCurrentImg,
      // });
      //
      // $thumbs.append($thumb);
    });

    // Ajout au DOM
    $('#slider').append($thumbs);

    $('#slider-thumbs img').on('click', app.changeImage);

  },
  //handler, permet change img graĉe miniatures
  changeImage: function(){
    //Cible la victime de l'event. celui qui subit et prend son index
    var currentIndex = $(this).index();
    //A partir de l'index, je cible l'index équivalent de mes images G
    var $image = $('#slider-images img').eq(currentIndex);
    //affiche l'image
    app.showImage($image);
  }

};

$(app.init);
