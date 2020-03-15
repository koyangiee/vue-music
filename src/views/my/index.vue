<template>
    <div>
        <Nav />
        <div class="my-menu">
            <div class="item">
                <div class="icon">
                    <font-awesome-icon icon="play-circle" />
                </div>
                <div class="name">私人FM</div>
            </div>
            <div class="item">
                <div class="icon">
                    <font-awesome-icon icon="music" />
                </div>
                <div class="name">最近播放 <span>(190)</span></div>
            </div>
            <div class="item">
                <div class="icon">
                    <font-awesome-icon icon="podcast" />
                </div>
                <div class="name">我的电台 <span>(190)</span></div>
            </div>
            <div class="item">
                <div class="icon">
                    <font-awesome-icon icon="star" />
                </div>
                <div class="name">我的收藏 <span>(190)</span></div>
            </div>
        </div>
        <div class="hr"></div>
        <div class="song-menu">
            <div class="menu-head">
                <div class="menu-head-left">创建的歌单 <span>({{ nonSubscribedSongMenu.length }})</span></div>
                <div class="menu-head-right">
                    <div class="add-menu">
                        <font-awesome-icon icon="plus" />
                    </div>
                    <div class="handle">
                        <font-awesome-icon icon="cog" />
                    </div>
                </div>
            </div>
            <div class="song-menu-list">
                <div class="song-menu-item" v-for="(item, index) in nonSubscribedSongMenu" :key="index">
                    <router-link :to="`/my/song/${item.id}`">
                        <div class="song-menu-item-left">
                            <img :src="item.coverImgUrl" alt="">
                            <div class="name-count">
                                <div class="name">{{ item.name }}</div>
                                <div class="count">{{ item.trackCount }}首</div>
                            </div>
                        </div>
                    </router-link>
                    <div class="song-menu-item-right">
                        <font-awesome-icon icon="cog" />
                    </div>
                </div>
            </div>
        </div>
        <div class="song-menu">
            <div class="menu-head">
                <div class="menu-head-left">收藏的歌单 <span>({{ subscribedSongMenu.length }})</span></div>
                <div class="menu-head-right">
                    <div class="handle">
                        <font-awesome-icon icon="cog" />
                    </div>
                </div>
            </div>
            <div class="song-menu-list">
                <div class="song-menu-item" v-for="(item, index) in subscribedSongMenu" :key="index">
                    <router-link :to="`/my/song/${item.id}`">
                        <div class="song-menu-item-left">
                            <img :src="item.coverImgUrl" alt="">
                            <div class="name-count">
                                <div class="name">{{ item.name }}</div>
                                <div class="count">{{ item.trackCount }}首</div>
                            </div>
                        </div>
                    </router-link>
                    <div class="song-menu-item-right">
                        <font-awesome-icon icon="cog" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/nav'
import{ reqSongMenu } from '@/api'
export default {
    components: {
        Nav
    },
    data(){
        return {
            username: '',
            password: '',
            subscribedSongMenu: [],
            nonSubscribedSongMenu: []
        }
    },
    created(){

        //歌单
        reqSongMenu({uid: this.$store.getters.profile.userId}).then(res =>{
            res.playlist.map((item)=>{
                if(item.subscribed){
                    this.subscribedSongMenu.push(item)
                    
                }else{
                    this.nonSubscribedSongMenu.push(item)
                }
            })
        })

    },
    methods: {
        login(){

        }
    }
}
</script>

<style lang="less">
    .hr{
        height: 5px;
        background-color: #eee;
    }

    .my-menu{
        .item{
            display: flex;
            align-items: center;
            line-height: 45px;

            .icon{
                color: #333;
                width: 15%;
                padding-left: 15px;
                text-align: center;
                font-size: 18px;
            }

            .name{
                width: 85%;
                font-size: 16px;
                border-bottom: 1px solid #eee;

                span{
                    color: #ccc;
                    font-size: 14px;
                }
            }

            &:last-child .name{
                border-bottom: none;
            }

        }
    }

    .song-menu{
        padding: 0 15px;

        .menu-head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
            height: 40px;

            .menu-head-left{
                font-weight: bold;
                span{
                    color: #ccc;
                    font-size: 14px;
                    font-weight: normal;
                }
            }

            .menu-head-right{
                display: flex;
                align-items: center;
                justify-content: space-between;

                .add-menu{
                    margin-right: 15px;
                }
            }
        }

        .song-menu-list{

            .song-menu-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 60px;

                .song-menu-item-left{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    img{
                        width: 50px;
                        border-radius: 5px;
                        margin-right: 5px;
                    }

                    .name-count{
                        .name{
                            font-size: 14px;
                            margin-bottom: 3px;
                            color: #000;
                        }

                        .count{
                            font-size: 12px;
                            color: #7b7b7b;
                        }
                    }
                }

                .song-menu-item-right{
                    color: #7b7b7b;
                }
            }

        }
    }
</style>