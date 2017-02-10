(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./modules/contentViewer":2,"./modules/menus":3,"./modules/nav":4}],2:[function(require,module,exports){
function contentViewer() {
  return {
    expand: function() {
      $('#assetsList li:nth-child(n+4)').addClass('open');
      $(this).remove();
      $('#assetListingFader').remove();
    },
    showItems: function() {
      $('.assetListingExpand').show();
    }
  }
}

module.exports = contentViewer;

},{}],3:[function(require,module,exports){
function menus() {
  return {
    socialMenu: {
      open: function() {
        $('.micrositeSocialMenu').toggleClass('show');
        $('.sponsorInfoPanel.show').removeClass('show');
        $(this).toggleClass('active');
        $('#sponsoredBy i').removeClass('active');
      }
    },
    sponsoredContent: {
      open: function() {
        $('.sponsorInfoPanel').toggleClass('show');
        $('.micrositeSocialMenu.show').removeClass('show');
        $(this).find('i').toggleClass('active');
        $('.icon-share').removeClass('active');
        $('.sponsoredByText').toggleClass('hide');
      },
      hide: function() {
        $('.sponsorInfoPanel,.micrositeSocialMenu').removeClass('show');
        $('#sponsoredBy i,.icon-share').removeClass('active');
        $('.sponsoredByText').removeClass('hide');
      }
    }
  }
}

module.exports = menus;

},{}],4:[function(require,module,exports){
function nav() {
  return {
    activeItem: function(className) {
      $('#navList li:first-child').addClass(className);
    },
    activeTab: function(tabLabel) {
      $('#tabDropDown a').text(tabLabel);
    },
    hideMenu: function() {
      $('#navList').removeClass('show');
    },
    toggleMenu: function() {
      $('#navList').toggleClass('show');
    }
  }
}

module.exports = nav;

},{}]},{},[1])