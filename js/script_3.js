$('a.heroPickerIconLink').each(function(){
  $(this).draggable();
});
$('a.heroPickerIconLink').click(function(){
  $(this).children('.heroHoverLarge').toggle();
  return false;
});