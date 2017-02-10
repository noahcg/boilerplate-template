if( typeof(embedded) == 'undefined' ) {
    var embedded = {};
}

embedded.template = function ( $ ) {
    // Private Modules
    var menus = require('./modules/menus');
    var nav = require('./modules/nav');
    var contentViewer = require('./modules/contentViewer');
    var menuInstance = new menus();
    var navInstance = new nav();
    var cvInstance = new contentViewer();

    // Private Variables
    var $window = $(window),
        $doc    = $(document),
        $body   = $('body'),

        $tab = $('#tabDropDown'),
        $assetList = $('#assetsList li'),
        assetsListingCount = $assetList.length,

        self;

    return {

        init: function() {
          self = embedded.template;

          $window
              .scroll( self.hidePanels )
              .resize( self.assetLists );

          $body
              .on( 'click', '.icon-share', menuInstance.socialMenu.open )
              .on( 'click', '#sponsoredBy', menuInstance.sponsoredContent.open )
              .on( 'click', '#tabDropDown', navInstance.toggleMenu )
              .on( 'click', '#navList li', navInstance.hideMenu )
              .on( 'click', '.assetListingExpand', cvInstance.expand );

          navInstance.activeItem('activeTab');
          navInstance.activeTab($('#navList .activeTab').text());

          this.assetsLists;

        },

        hidePanels: function() {
          if($('.sponsorInfoPanel').hasClass('show') && $(window).scrollTop() > $('.header').outerHeight(true) || $('.micrositeSocialMenu').hasClass('show') && $(window).scrollTop() > $('.header').outerHeight(true)){
            menuInstance.sponsoredContent.hide();
          }
        },

        assetLists: function() {

          if($window.width() < 960){
            if(assetsListingCount > 3) {
              cvInstance.showItems;
            }
          } else if ($window.width() >= 960){
            if(assetsListingCount > 10) {
              cvInstance.showItems;
            }
          }

        }


    };
} ( jQuery );

jQuery(function( $ ) {
    embedded.template.init();
});
