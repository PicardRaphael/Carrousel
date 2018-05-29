var app = {
  init: function(){
    $('#slider-images img:gt(0)').hide();// on cache toutes les img sauf la première
    setInterval(app.slide, 2000);
  },
  slide: function(){
    //Selectionne le premier enfant slider-images, la fait disparaite, on affiche l'image suivant (frère) avec un fadeIn,
    $('#slider-images :first-child').fadeOut().next('img').fadeIn().end().appendTo('#slider-images');
  },
};
$(app.init);
