(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./modules/menus":2,"./modules/nav":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
function nav() {
  return {
    activeItem: function(className) {
      $('#navList li:first-child').addClass(className);
    },
    activeTab: function(tabLabel) {
      $('#tabDropDown a').text(tabLabel);
    }
  }
}

module.exports = nav;

},{}]},{},[1])