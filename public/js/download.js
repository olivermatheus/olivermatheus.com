document.getElementById('download-btn').addEventListener('click', function() {
    var element = document.getElementById('card');
    
    html2canvas(element).then(function(canvas) {
      var link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'invitation.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  