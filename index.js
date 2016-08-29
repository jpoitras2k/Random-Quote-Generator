$(document).ready(function() {
  $('#new-quote-button').on('click', function(e) {
    e.preventDefault();
    //With Ajax, web applications can send data to and retrieve from a server asynchronously
    $.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); 
        // The data is an array of posts. Grab the first one.
        $('.quote').html(post.content);
        $('#quote-author').text(post.title);
                        

        currentQuote = $('.quote');
        $('#tweet').on('click', function() {
          var text = $(currentQuote).text();
          var auth = $('#quote-author').text();
          window.open('https://twitter.com/intent/tweet?&text=' + text + ' - ' + auth);
        });
      },
      cache: false
    });
  });
});