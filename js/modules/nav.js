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
