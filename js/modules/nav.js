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
