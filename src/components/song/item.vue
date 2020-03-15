<template>
    <div class="song-item">
        <router-link to="">
        <div class="song-item-img">
            <img v-lazy="item.picUrl">
        </div>
        <div class="song-item-title">{{ item.name }}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="less">
    .song-item{
        width: 31%;
        margin-bottom: 15px;

        .song-item-img{
            position: relative;

            img{
                width: 100%;
                border-radius: 5px;
            }
        }

        .song-item-title{
            font-size: 12px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
</style>