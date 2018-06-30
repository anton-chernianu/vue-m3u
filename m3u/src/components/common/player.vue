<template>
    <div id="player">
        <!--https://webarmen.com/my/iptv/auto.nogrp.m3u-->
        <video ref="playerM" width=800 height=400 class="video-js vjs-default-skin" controls>
            <!-- http://b90788cf.suklakakl.site/iptv/APPBERG7BRTY6L/541/index.m3u8 -->
            <source>
        </video>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import videojs from 'video.js';
    import videoPlayer from 'videojs-contrib-hls';
    import dataPlaylist from '@/assets/tv.json';

    export default {
        name: 'player',
        props: {
            channel: {
                type : String,
            }
        },
        watch: {
            channel : function(val) {
                let playerID = this.$refs.playerM;
                let playerElem = videojs(playerID, {html5: {
                    hls: {
                        withCredentials: false
                    },
                }});
                playerElem.src({type: 'application/x-mpegURL', src: this.channel});
                playerElem.volume(1);
                playerElem.play();
            }
        },
        mounted() {

        }
    }
</script>
