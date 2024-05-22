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
  });
  
document.getElementById('lenguajes').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const codeImage = document.getElementById('codeImage');

    switch (selectedLanguage) {
        case 'php':
            codeImage.src = 'images/php.png';
            break;
        case 'html':
            codeImage.src = 'images/html.png';
            break;
        case 'css':
            codeImage.src = 'images/css.png';
            break;
        case 'js':
            codeImage.src = 'images/js.png';
            break;
        default:
            codeImage.src = 'images/php.png';
    }
});
