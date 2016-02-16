import $ from 'jquery';

var AREA_SCALE = 640 / 960; // 一个默认比例
var FULL_SCALE = 0.95; // 宽度保留 5%

/**
 * 初始化 Canvas
 * @param canvas HTML canvas
 * @param params
 * @returns {{}} 管理对象
 */
function initCanvas(canvas, params) {

  var $canvas = $(canvas);
  var context = canvas.getContext('2d')

  var pageNumber = 0, // 课件相关
    stepNumber = 0,
    paramsStep = params.step || {};

  var startPoint = {}, // 划线开始点
    toPoint = {},
    replayContent = '' // 划线字符串

  var standard; // canvas 的宽度

  var isDown = false;

  var drawCallback = params.drawCallback;


  /**
   * 重置 canvas 样式，
   * 主要因为横屏后会初始化
   */
  function resetStyle() {
    context.lineWidth = 2;
    context.strokeStyle = "rgb(255,0,0)";
    context.font = Math.round(standard * 0.04) + 'px sans-serif'; // 重新设置字体大小
  }

  /**
   * 横屏处理
   */
  var $window = $(window);
  $window.resize(function () {
    var width = $window.width(),
      height = $window.height();
    if (height < width) { // 横屏
      height *= FULL_SCALE;
      width = Math.round(height / AREA_SCALE);
    } else { // 竖屏
      width *= FULL_SCALE;
      height = Math.round(width * AREA_SCALE);
    }

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    standard = width;

    resetStyle();
    showStep();
  }).resize();

  /**
   * 划线方法
   * @param startX
   * @param startY
   * @param endX
   * @param endY
   */
  function begin(startX, startY, endX, endY) {
    context.beginPath();
    context.moveTo(startX * standard, startY * standard);
    context.lineTo(endX * standard, endY * standard);
    context.stroke();
  }

  /**
   * 清空
   */
  function resetCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * 添加一段划线路径
   * @param msg
   */
  function appendContent(msg) {
    replayContent += msg + '|'
  }

  /**
   * 添加一段划线
   * @param msg
   */
  function append(startX, startY, endX, endY) {
    begin(startX, startY, endX, endY);
  }

  $canvas.on('touchstart', function (e) {
    isDown = true;
    setPoint(e, startPoint);
  });

  if (!params.disabled) {
    $canvas.on('touchmove', function (e) {
      var x1, y1, x2, y2;
      if (isDown) {

        setPoint(e, toPoint);

        begin(startPoint.x, startPoint.y, toPoint.x, toPoint.y);

        if (drawCallback) {
          drawCallback(startPoint.x + ',' + startPoint.y + ',' + toPoint.x + ',' + toPoint.y);
        }

        replayContent += "|" + [startPoint.x, startPoint.y,
            toPoint.x, toPoint.y].join(',');

        setPoint(e, startPoint);

      }
    });
  }

  $canvas.on('touchup', function (e) {
    isDown = false;
  });

  /**
   * 设置真是坐标，并转换成矢量
   * @param e
   * @param point
   */
  function setPoint(e, point) {

    var touch = e.originalEvent.changedTouches[0]; //
    var rect = canvas.getBoundingClientRect();  // 绝对位置
    point.x = toPercent(touch.clientX - rect.left);
    point.y = toPercent(touch.clientY - rect.top);
  }

  /**
   * 坐标转换为矢量
   * @param position
   * return 宽度的百分比坐标
   */
  function toPercent(position) {
    return position / standard;
  }


  function showLine(data) {

    resetCanvas();

    var playList = replayContent.split('|');
    while (playList.length > 0) {

      var data = playList.shift();
      if (data) {
        var points = data.split(',');
        begin(points[0], points[1], points[2], points[3]);
//                    context.closePath();
      }
    }
  }

  /**
   * 显示步骤
   */
  function showStep() {

    resetCanvas();

    showLine(); // 重新显示划线

    var stepList = paramsStep[pageNumber];

    for (var i = 0; i <= stepNumber; i++) {
      fillText(stepList[i], i);
    }

  }

  /**
   * 设置 页 和 步骤
   * @param clear
   * @param page
   * @param step
   */
  function setStep(clear, page, step) {
    var pageMax = paramsStep.length;

    var stepMax = paramsStep[pageNumber].length;
    if (clear != 0) { // 按照绝对值设置
      pageNumber = page;
      stepNumber = step;
    } else { // 按照步骤设置
      pageNumber += parseInt(page);
      stepNumber += parseInt(step);

    }

    // 越界计算
    if (stepNumber < 0) {
      stepNumber = 0;
      pageNumber--;
    }
    if (stepNumber >= stepMax) {
      stepNumber = 0;
      pageNumber++;
    }

    if (pageNumber < 0 || pageNumber >= pageMax) {
      pageNumber = 0;
    }

    showStep();

  }

  /**
   * 填充文本 按照五行计算高度
   * @param text
   * @param index
   */
  function fillText(text, index) {
    var standardScaled = standard * AREA_SCALE,
      x = 0.05 * standardScaled,
      y = index * (standardScaled / 11) + standardScaled * 0.1,
      height = (standardScaled / 2 + standardScaled * 0.1) * 0.9;

    var img;

    var reg = new RegExp('imgData:(.*)'),
      imgUrlMatch = text.match(reg);
    if (imgUrlMatch && imgUrlMatch[1]) { // 插入图像
      img = new Image();
      img.src = imgUrlMatch[1];
      img.onload = onImgLoad;

    } else { // 插入文本
      context.fillText(text, x, y);
    }

    function onImgLoad() { // 图片加载完成填充到 canvas
      //宽高比例
      var scale = img.width / img.height;
      context.drawImage(img, x, y - height * 0.6, scale * height, height)
    }

  }

  function clearContent() {
    replayContent = '';
    showStep();
  }

  function getPageNumber() {
    return pageNumber;
  }

  function getStepNumber() {
    return stepNumber;
  }

  return {
    appendContent: appendContent,
    append: append,
    showLine: showLine,
    setStep: setStep,
    resetCanvas: resetCanvas,
    clearContent: clearContent,
    getPageNumber: getPageNumber,
    getStepNumber: getStepNumber
  }
}


module.exports = initCanvas;
