<template>
    <div>
        <file-button @output="output" maxSize="100">
            点击上传
        </file-button>
        <img v-if="src" :src="src">
    </div>
</template>
<script>
    import FileButton from '../components/FileButton'

    export default {
        components: {
            FileButton
        },
        data() {
            return {
                src: '',
            };
        },
        created() {
            console.log('created11111')
        },
        methods: {
            output(data) {
                console.log(data)
                this.src = data;
            }
        }
    }
</script>
<style scoped>

</style>
