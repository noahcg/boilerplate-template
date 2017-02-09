if( typeof(embedded) == 'undefined' ) {
    var embedded = {};
}

embedded.template = function ( $ ) {
    // Private Modules
    var menus = require('./modules/menus');
    var nav = require('./modules/nav');
    var menuInstance = new menus();
    var navInstance = new nav();

    // Private Variables
    var $window = $(window),
        $doc    = $(document),
        $body   = $('body'),

        self;

    return {

        init: function() {
          self = embedded.template;

          $window
              .scroll( self.hidePanels );

          $body
              .on( 'click', '.icon-share', menuInstance.socialMenu.open )
              .on( 'click', '#sponsoredBy', menuInstance.sponsoredContent.open );

          navInstance.activeItem('activeTab');
          navInstance.activeTab($('#navList .activeTab').text());
        },

        hidePanels: function() {
          if($('.sponsorInfoPanel').hasClass('show') && $(window).scrollTop() > $('.header').outerHeight(true) || $('.micrositeSocialMenu').hasClass('show') && $(window).scrollTop() > $('.header').outerHeight(true)){
            menuInstance.sponsoredContent.hide();
          }
        }
    };
} ( jQuery );

jQuery(function( $ ) {
    embedded.template.init();
});
