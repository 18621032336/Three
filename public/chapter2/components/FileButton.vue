<!--author 张康鑫-->
<!--lasted 2018-04-24 15:36-->
<template>
    <label>
        <slot></slot>
        <input type="file" @change="fileChange">
        <div class="canvas-container">
            <canvas ref="canvas"></canvas>
        </div>
    </label>
</template>
<script>
    export default {
        props: ['title', 'maxSize'],
        methods: {
            fileChange({srcElement: {files: [file]}}) {
                let reader = new FileReader();
                reader.onload = () => {
                    let result = reader.result
                    let size = file.size / 1024; // 文件多少大小 k

                    if (size < this.maxSize || !this.maxSize) { // 不需要压缩
                        this.$emit('output', result)
                    }

                    let img = new Image()
                    img.src = result
                    img.onload = () => {
                        this.$emit('output', this.exec(img, this.maxSize / size))
                    }
                }
                reader.readAsDataURL(file)
            },
            /**
             * 执行压缩
             * @param img 图片对象
             * @param percent 压缩比例
             * @returns {string}
             */
            exec(img, percent) {
                let naturalHeight = img.naturalHeight,
                    naturalWidth = img.naturalWidth;

                var canvas = this.$refs.canvas,
                    context = canvas.getContext('2d')

                canvas.setAttribute('width', naturalWidth);
                canvas.setAttribute('height', naturalHeight);

                context.drawImage(img, 0, 0, naturalWidth, naturalHeight)

                return canvas.toDataURL('image/jpeg', percent.toFixed(4) * 1)
            }
        }
    }
</script>
<style lang="stylus" scoped>
    label
        /*display inline-block*/
        font-size .24rem
        color main-black

    /*background pink*/
    /*padding .05rem .3rem*/
    /*border-radius .2rem*/
    /*text-align center*/

    input
        display none

    .canvas-container
        width 0rem
        height 0rem
        overflow hidden
</style>
