function fancyBlockQuotes() {
  formatFirstLetters('p.quote');
}

function formatFirstLetters(selector) {
  colour = jQuery('body').css('background-color');
  window.letters = wrapFirstLetters('body ' + selector).join('');
  setBackgroundColour('body, ' + selector + " .first-char", window.letters);
}

function wrapFirstLetters(selector) {
  letters = [];
  $(selector).each(function(i) {
    var chars = $(this).text().split('');
    letters.push(chars[0]);
    chars[0] = "<span class='first-char'>" + chars[0] + "</span>";
    $(this).html(chars.join(''));
  });
  return letters;
}

function setBackgroundColour(selector, colour) {
  $(selector).css('background-color', colour);
}

$(document).ready(function() {
  fancyBlockQuotes();
})