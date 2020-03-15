<template>
    <div>
        123
    </div>
</template>

<script>
import { reqMenuSong } from '@/api'
export default {
    data(){
        return {

        }
    },
    created(){
        console.log(this.$route)
        reqMenuSong({id: this.$route.params.id}).then(res => {
            console.log(res)
        })
    }
}
</script>

<style lang="less">

</style>