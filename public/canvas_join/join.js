(function () {
  var global = (function () {
      return this
    })(),
    document = global.document,
    canvas = document.querySelector('#joinContainer'),
    joinImage = document.querySelector('#joinImage'),
    context = canvas.getContext('2d');

  var srcList = ['A1.png', 'A1.png', 'A1.png', 'A1.png', 'A1.png', 'A1.png', 'A1.png', 'A1.png'],
    imgList = [];

  srcList.forEach(function (src, index) {
    var img = new Image();
    img.src = 'img/' + src;
    img.onload = loadComplate;
    imgList.push(img)
  });

  var count = 0;

  function loadComplate() {
    count++;
    if (count == srcList.length) {

      context.translate(250, 250)
      draw();

      joinImage.src = canvas.toDataURL();
    }
  }

  function draw() {
    imgList.forEach(function (img, index) {
      context.restore();
      context.rotate((45 * Math.PI / 180) * index);
      context.drawImage(img, 0, 0);
    });
  }


})();
