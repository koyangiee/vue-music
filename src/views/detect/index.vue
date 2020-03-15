<template>
    <div>
        <Nav />
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#c20c0c">
                <van-swipe-item v-for="(banner, index) in banners" :key="index">
                    <img :src="banner.picUrl" :style="{width: '100%'}" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="tab-container">
            <Tab icon="calendar" :value="day" name="每日推荐"/>
            <Tab icon="music" name="歌单"/>
            <Tab icon="podcast" name="排行榜"/>
            <Tab icon="microphone" name="电台"/>
            <Tab icon="play-circle" name="直播"/>
        </div>
        <div class="recommend-song">
            <div class="recommend-song-title">
                <div class="recommend-song-title-left">
                    推荐歌单
                </div>
                <div class="recommend-song-title-right">
                    <router-link class="more-button" to="">歌单广场</router-link>
                </div>
            </div>
            <div class="item-container">
                <Item v-for="(item, index) in recommendSonglist" :key="index"
                :item="item"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import Nav from '@/components/nav'
import Tab from '@/components/tab'
import Item from '@/components/song/item'
import { reqBanner, reqRecommendSonglist } from '@/api'
export default {
    components: {
        Nav,
        Tab,
        Item
    },
    data(){
        return {
            banners: [],
            recommendSonglist: [],
            day: new Date().getDate()
        }
    },
    created(){

        // banner
        reqBanner({type: 1}).then(data => {
            this.banners = data.banners
        })

        // 推荐歌单
        reqRecommendSonglist({limit: 6}).then(data => {
            this.recommendSonglist = data.result
        })
        
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

<style lang="less">
    .banner{
        border-radius: 5px;
        margin-top: 5px;
        padding: 0 10px;

        img{
            border-radius: 5px;
        }
    }

    .tab-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 10px 10px;
        border-bottom: 1px solid #e4e4e4;
    }

    .recommend-song{
        margin-top: 5px;
        padding: 0 10px;

        .recommend-song-title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 48px;
            
        }

        .recommend-song-title-left{
            font-weight: bold;
            font-size: 16px;
        }

        .recommend-song-title-right{
            .more-button{
                height: 20px;
                line-height: 20px;
                width: 68px;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 16px;
                font-size: 12px;
                color: #000;
                display: block;
            }
        }

        .item-container{
            display: flex;
            justify-content: space-between;
            flex-flow: wrap;
        }
    }
</style>