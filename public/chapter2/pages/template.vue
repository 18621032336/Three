<template>
    <div>
        <printer-template ref="printer"></printer-template>
        <button @click="handler">点击渲染模板</button>
    </div>
</template>
<script>
    import PrinterTemplate from '../components/PrinterTemplate'

    export default {
        components: {
            PrinterTemplate
        },
        data() {
            return {};
        },
        created() {
            console.log('created11111')
        },
        methods: {
            async handler(e) {
                let data = {
                    list: ['1', '2', '3', '4', '5', '6'],
                    if: false,
                }
                let template = await this.$refs.printer.myRender(data);
                console.log(template)
            }
        }
    }
</script>
<style scoped>

</style>
