<template>
    <div>
        <div class="container" @click="handler">
            <div v-for="i in 42" class="line">
                <div v-for="j in 31" class="grid" :class="{fly: flySet[i + '_' + j]}"
                     :style="{'background-position' : `${j*-20}px ${i*-20}px`}">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                iIndex: 42,
                jIndex: 31,
                flySet: {},
            };
        },
        methods: {
            handler() {
                // 循环填充 flySet
                let interval0 = setInterval(() => {
                    if (this.iIndex > 0) {
                        this.iIndex--;
                        this.setTask(this.iIndex, this.jIndex);
                    } else {
                        clearInterval(interval0);
                    }
                }, 60)
                let interval1 = setInterval(() => {
                    if (this.jIndex > 0) {
                        this.jIndex--;
                        this.setTask(this.iIndex, this.jIndex);
                    } else {
                        clearInterval(interval1);
                    }
                }, 80)

            },
            setTask(i, j) {
                for (let ii = i; ii <= 42; ii++) { // i j 右方&下方的图格
                    for (let jj = j; jj <= 31; jj++) {
                        let timeout = Math.random() * 400 // 随机性
                        let t2 = Math.random() * 10 > 6; // 随机性
                        if (t2) {
                            setTimeout(() => {
                                this.$set(this.flySet, `${ii}_${jj}`, true);
                            }, timeout)
                        } else {
                            this.$set(this.flySet, `${ii}_${jj}`, true);
                        }
                    }
                }

            }
        }
    }
</script>
<style lang="stylus">
    span
        background #ccc
        border-radius 10px
        font-size 20px
        padding 10px 20px

    .line
        font-size 0px

    .grid
        width 20px
        height 20px
        display inline-block
        font-size 0px
        position relative
        transition-property transform
        transition-timing-function linear
        transition-duration 2s
        background url(../assets/1.jpg)

    .fly
        transform rotateZ(360deg) rotateX(360deg) translateX(600px)
</style>
