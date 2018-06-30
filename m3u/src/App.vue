<template>
    <div id="app">

        <player v-if="show" :channel="selectChannel"></player>
        
        <ul class="list">
            <li  v-for="(channel, index) in tvChannel" class="list-item" @click.prevent="sendChannel(channel[2])" :key="index">
                {{channel[1]}}
            </li>
        </ul>

    </div>
</template>

<script>
    import player from '@/components/common/player';
    import dataPlaylist from '@/assets/tv.json';

    export default {
        name: 'App',
        components: {
            player
        },
        data(){
            return{
                tvChannel : dataPlaylist,
                selectChannel: '',
                show: false
            }
        },
        methods: {
            sendChannel(data){
                this.show = false;
               this.selectChannel = data;
               this.show = true;
            }
        },
        mounted() {
            console.log(dataPlaylist);
        }
    }
</script>
