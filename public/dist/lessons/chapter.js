var step = [

  [
    '>如何编写高质量的子程序？',
    '>什么是“子程序”？',
    '为实现目的而编写的一个可被调用的方法或过程(函数)',
    '>什么是“高质量的子程序”？',
    '1.差劲的名字',
    '2.没有注释文档',
    '3.没有单一而明确的目的',
    '4.容错',
    '5.未引用参数',
    '6.参数过多'
  ],
  [
    '>创建子程序的正当理由',
    '1.降低和隔离复杂度',
    '2.避免代码重复',
    '3.隐藏细节和顺序  例如：数据依赖',
    '4.提高可移植性',
    '5.简化复杂的判断'
  ],
  [
    '>子程序内聚性设计',
    '1.顺序上的内聚性（计算依赖）',
    '2.过程上的内聚性（程序操作和用户操作同步）',
    '3.逻辑上的内聚性（大块if）'
  ],
  [
    '>好的子程序名字',
    '1.描述子程序名字',
    '2.避免使用无意义的、模糊或表述不清的动词',
    '3.不要仅通过数字来形成不同的子程序名字',
    '4.对返回值有所描述',
    '5.为常用操作确立命名规则',
    '  startLittleGame() & playSmallGame()'
  ],
  [
    '>子程序参数',
    '1.输入 > 修改 > 输出',
    '2.使用所有的参数',
    '3.把状态或出错变量放在最后',
    '4.不要把子程序的参数用作工作变量赋值',
    '5.注释对参数的假定说明',
    '6.合理参数上限 < 7',
    '7.输入 修改 输出 的命名规则'
  ],
  [
    '>结束语',
    '1.创建子程序最主要的目的？',
    '  提高程序的可管理性、可靠性、可读性、可修改性',
    '2.应该让大多数子程序具有功能上的内聚性',
    '3.子程序的名字是它的质量的指示器'
  ],
  [
    'Canvas',
    '一个画图标签、容器',
    '必须使用脚本来绘制图形',
    'imgData:../../dist/image/1.png',
    'Canvas 内到底有没有DOM结构？',
    'Canvas 支持3D吗？',
    '原生不支持！',
    '必须自己使用代码运算！',
    'canvas 环境绘制对象',
    'canvas.getContext("2d")'
  ],
  [
    'CanvasRenderingContext2D 线条绘制',
    'context.beginPath() // 开始一个路径',
    'context.moveTo(x, y) // 移动到坐标',
    'context.lineTo(x, y) // 划线到坐标',
    'context.fill() // 填充现有路径',
    '文字绘制',
    'context.font = 12px 微软雅黑 // 字体&大小',
    'context.strokeStyle = blue // 文字样式',
    'context.strokeText(text, x, y) // 文字描边',
    'context.fillText(text, x, y) // 文字填充'
  ],
  [
    '区域绘制',
    'context.clearRect(x, y, w, h) // 清除',
    'context.rect(x, y, w, h) // 绘制矩形路径',
    'context.arc(x, y, r, start, end) // 原型路径',
    'context.fill() | context.stroke()',
    '图像的绘制',
    'context.drawImage(HTMLImage, x, y, w, h) // 图像',
    'context.drawImage(HTMLCanvas, x, y, w, h)',
    'context.putImageData(imageData, x, y, w, h)',
    'context.getImageData(x, y, w, h) // imageData'

  ],
  [
    'context 修剪区域概念',
    'context.beginPath(); // 开始路径',
    'context.arc(x, y, r); // 绘制圆路径',
    'context.rect(x, y, w, h) // 绘制矩形路径',
    'context.bezierCurveTo(x,y,x,y,x,y) // 贝塞尔',
    'context.clip() // 设置剪切区域',
    'context.drawImage(img, x, y, w, h)',
    'context.fillRect(x, y, x2, y2)',
    'context.fillText(x, y, x2, y2) // 只影响剪切区域',
    'context.restore() // 恢复'
  ]
]
module.exports = step;
