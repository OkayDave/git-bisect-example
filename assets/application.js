function fancyBlockQuotes() {
  formatFirstLetters('p.quote');
  formatQuote('blockquote');
}

function fullHeightContainer() {
  $('.container').css('padding-bottom', '5000px');
}

function formatQuote(selector) {
  jQuery("body " + selector).addClass('hover-effect')
}

function formatFirstLetters(selector) {
  colour = jQuery('body').css('background-color');
  window.letters = wrapFirstLetters('body ' + selector).join('');
  setBackgroundColour('body, ' + selector + " .first-char", window.letters);
  increasePadding('body ' + selector + " .first-char", '5px');
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

function increasePadding(selector, newPadding) {
  $(selector).css('padding-left', newPadding).css('padding-right', newPadding);
}

$(document).ready(function() {
  fancyBlockQuotes();
  fullHeightContainer();
})