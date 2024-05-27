document.addEventListener('DOMContentLoaded', (event) => {
  var popup = document.getElementById('popup');
  var btn = document.getElementById('projectsBtn');
  var closeBtn = document.getElementById('closePopup');

  btn.onclick = function() {
    popup.style.display = 'block';
  }

  closeBtn.onclick = function() {
    popup.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  }

  var lenguajes = document.getElementById('lenguajes');
  var codeImage = document.getElementById('codeImage');

  var images = {
    php: 'Source/php.png',
    html: 'Source/html.png',
    css: 'Source/css.png',
    js: 'Source/js.png'
  };

  lenguajes.addEventListener('change', function() {
    var selectedValue = this.value;
    codeImage.src = images[selectedValue];
  });
});

