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
