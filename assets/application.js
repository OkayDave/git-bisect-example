function fancyBlockQuotes() {
  formatFirstLetters();
}

function formatFirstLetters() {
  window.letters = wrapFirstLetters();
}

function wrapFirstLetters() {
  letters = [];
  $('p.quote').each(function(i) {
    var chars = $(this).text().split('');
    letters << chars[0];
    chars[0] = "<span class='first-char'>" + chars[0] + "</span>";
    $(this).html(chars.join(''));
  });
  return letters;
}

$(document).ready(function() {
  fancyBlockQuotes();
})