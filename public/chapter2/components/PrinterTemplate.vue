<template>
    <div ref="container">
        <h1 :key="i" v-for="(item,i) in data.list">{{item}}</h1>

        <h2 v-if="data.if">条件显示内容</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {}
            }
        },
        updated() {
            this.callback(this.$refs.container.innerHTML);
        },
        methods: {
            myRender(data) {
                return new Promise((resolve, reject) => {
                    this.callback = function (template) {
                        console.log('template', '---', template)
                        resolve(template);
                    };
                    this.data = { // 设置数据
                        ...data,
                    };
                })
            }
        }
    }
</script>
