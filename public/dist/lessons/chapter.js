define(function(require) {
    var step = [
        [
            'Canvas',
            '一个画图标签、容器',
            '必须使用脚本来绘制图形',
            '2',
            'Canvas 内到底有没有DOM结构？'
        ],
        [
            'Canvas 支持3D吗？',
            '原生不支持！',
            '必须自己使用代码运算！',
            'canvas 环境绘制对象',
            'canvas.getContext("2d")'
        ],
        [
            'CanvasRenderingContext2D',
            'context.strokeText(text) // 文字描边',
            'context.fillText(text) // 文字填充',
            'context.font = 12px 微软雅黑',
            'context.strokeStyle = blue',
        ],
        [
            'context 修剪区域概念',
            'context.arc(x, y, r); // 绘制路径',
            'context.clip() // 设置剪切区域',
            'context.drawImage(img, x, y, w, h)',
            'context.fillRect(x, y, x2, y2)'
        ]
    ];

    return step;
});
