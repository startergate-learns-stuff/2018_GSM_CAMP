function color(fontColor, bgColor, label) {
  $('body').css('color', fontColor).css('backgroundColor', bgColor);
  $('#toggle').val(label);
  $('a').css('color', fontColor);
}
/*function nightColor() {
  document.querySelector('body').style.backgroundColor='rgb(62,65,78)';
  document.querySelector('body').style.color='white';
  document.querySelector('a').style.color='white';
  document.querySelector('#toggle').value='day';
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color='white';
    i++
  }
}
function dayColor() {
  document.querySelector('body').style.backgroundColor='white';
  document.querySelector('body').style.color='black';
  document.querySelector('a').style.color='black';
  document.querySelector('#toggle').value='night';
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color='black';
    i++
  }
}*/
