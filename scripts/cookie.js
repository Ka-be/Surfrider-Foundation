window.onload = () => {
    document.getElementById('cookie-close').onclick = function() {
      this.parentNode.remove()
      return false;
    };
  };