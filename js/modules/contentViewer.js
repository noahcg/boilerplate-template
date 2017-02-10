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
