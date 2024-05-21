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
  