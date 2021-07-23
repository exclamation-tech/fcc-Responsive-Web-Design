const quotableEndpoint = "https://api.quotable.io/random";

// Fetches data from quote API, and changes elements on the page
function newQuote() {
  $.getJSON(quotableEndpoint, function (data) {
    // Sets quote box content
    $("#text").html(`"${data.content}"`);
    $("#author").html(`<cite> ${data.author}</cite>`);

    // Sets twitter link
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?&text=" +
        encodeURIComponent(`'"${data.quote} - ${data.author}'`)
    );
  });
}

// Sets a quote on page load
newQuote();
