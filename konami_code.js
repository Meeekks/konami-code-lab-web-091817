const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.which || event.detail || event.location);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Konami Code Accepted!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

// no idea why I have to include event.detail
