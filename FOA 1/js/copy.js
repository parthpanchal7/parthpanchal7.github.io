document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    alert("Copyrights Freedom of Art");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("Copyrights Freedom of Art");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("Copyrights Freedom of Art");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    alert("Copyrights Freedom of Art");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("Copyrights Freedom of Art");
    window.event.returnValue = false;
  });
}