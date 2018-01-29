jQuery(function($) {
  $( "#link-1" ).bind( "click", function() {
    $("#rss-feeds").empty(),
    $("#rss-feeds").rss("https://www.flickr.com/services/feeds/photos_public.gne?id=136046346@N06&lang=en-us&format=atom", {
      limit: 8,
	  effect: 'slideFastSynced',
      entryTemplate: "<div>{teaserImage}</div>",
      tokens: {
        year: function(entry, tokens) {
          return new Date(entry.publishedDate).getFullYear()
        }
      }
    })
  }),

  $( "#link-2" ).bind( "click", function() {
    $("#rss-feeds").empty(),
    $("#rss-feeds").rss("https://www.flickr.com/services/feeds/photos_public.gne?id=33616145@N00&lang=en-us&format=atom", {
      limit: 8,
	  effect: 'slide',
      entryTemplate: "<div>{teaserImage}</div>",
      tokens: {
        year: function(entry, tokens) {
          return new Date(entry.publishedDate).getFullYear()
        }
      }
    })
  })
})
