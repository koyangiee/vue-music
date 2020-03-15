<template>
    <div class="player">
        <div class="fixed-frame">
            <div class="fixed-frame-left">
                <img :src="song.picUrl" :alt="song.name" />
                <div class="name-author">
                    <div class="name">{{ song.name }}</div>
                    <div class="author">{{ song.arName }}</div>
                </div>
            </div>
            <div class="fixed-frame-right">
                <div class="play-button" @click="paly">
                    <font-awesome-icon :icon="playIcon" />
                </div>
                <div class="song-list">
                    <font-awesome-icon icon="list" />
                </div>
            </div>
        </div>
        <audio ref="audio" src="https://music.163.com/song/media/outer/url?id=541250402.mp3" style="display: none;"></audio>
    </div>
</template>

<script>
import { reqSongDtail } from '@/api'
export default {
    props: {
        ids: {
            type: [String, Number],
            default: ''
        }
    },
    data(){
        return {
            song: {
                id: 0,
                name: '',
                picUrl: '',
                arName: '',
                alia: '',
                alName: '',

            },
            playIcon: 'play-circle'
        }
    },
    created(){
        //获取歌曲
        reqSongDtail({ids: 1381755293}).then(res => {
            this.song.id = res.songs[0].id
            this.song.name = res.songs[0].name
            this.song.picUrl = res.songs[0].al.picUrl
            this.song.alia = res.songs[0].alia[0]
            this.song.alName = res.songs[0].al.name
            this.song.arName = res.songs[0].ar[0].name
            
        })

        //获取歌词(接口不可用， 返回空)
        // reqLyric(1381755293).then(res => {
        //     console.log(res)
        // })
        
    },
    methods: {
        paly(){
            var audio = this.$refs.audio
            if(audio.paused){
                audio.play()
                this.playIcon = 'pause-circle'
            }else{
                audio.pause()
                console.log(audio.currentTime, audio.duration)
                this.playIcon = 'play-circle'
            }
        }
    }
}
</script>

<style lang="less">
    .player{
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        height: 60px;
        width: 100%;
        padding: 5px;
        border-top: 1px solid #eee;
        display: flex;
        align-items: center;

        .fixed-frame{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .fixed-frame-left{
                display: flex;
                align-items: center;

                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    margin-right: 5px;
                }

                .name-author{

                    .name{
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }

                    .author{
                        font-size: 12px;
                        color: #9c9c9c;
                    }

                }
            }

            .fixed-frame-right{
                display: flex;
                align-items: center;
                font-size: 24px;

                .play-button{
                    margin-right: 20px;
                }
                
                .song-list{
                    margin-right: 5px;
                }

            }

        }

    }
</style>