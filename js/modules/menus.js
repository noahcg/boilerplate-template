var s, Menus = {

  settings: {
    socialMenu: $('.micrositeSocialMenu'),
    infoPanel: $('.sponsorInfoPanel.show'),
    sponsorIcon: $('#sponsoredBy i'),
    shareIcon: $('.icon-share')
  },

  init: function() {
    s = this.settings;
    this.bindEvents();
  },

  bindEvents: function() {
    s.shareIcon.on("click", function() {
      Menus.clickButton();
    });
  },

  clickButton: function() {
    console.log('hi');
  }
}

module.exports = Menus;

// var socialMenu = function(){
//     $('.icon-share').on('click',function(){
//       $('.micrositeSocialMenu').toggleClass('show');
//       $('.sponsorInfoPanel.show').removeClass('show');
//       $(this).toggleClass('active');
//       $('#sponsoredBy i').removeClass('active');
//     });
//   }
