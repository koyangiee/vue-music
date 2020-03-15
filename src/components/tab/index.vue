<template>
    <router-link :to="href">
        <div class="tab">
            <div class="icon">
                <font-awesome-layers v-if="value">
                    <font-awesome-icon class="iconfont" :icon="icon" />
                    <font-awesome-layers-text :value="value" :style="{color: '#c20c0c', fontSize: '12px'}" transform="down-5 right-1"/>
                </font-awesome-layers>
                <font-awesome-icon v-else class="iconfont" :icon="icon" />
            </div>
            <div class="name">{{ name }}</div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: ''
        },
        value: {
            type: [Number, String],
            default: ''
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="less">
    .tab{

        .icon{
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(to right, #fd6465, #c20c0c);
            border-radius: 45px;
            text-align: center;

            .iconfont{
                color: #ffffff;
                font-size: 20px;
            }
        }

        .name{
            color: #000;
            font-size: 12px;
            margin-top: 5px;
            text-align: center;
        }
    }
</style>