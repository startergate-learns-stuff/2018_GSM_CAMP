function color(fontColor, bgColor, label) {
  $('body').css('color', fontColor).css('backgroundColor', bgColor);
  $('#toggle').val(label);
  $('a').css('color', fontColor);
}
