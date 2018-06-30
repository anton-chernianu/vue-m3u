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
        data() {
          return {
              playerElem : null,
          }
        },
        watch: {
            channel : function() {
                this.playerElem.src({type: 'application/x-mpegURL', src: this.channel});
                this.playerElem.play();
            }
        },
        mounted() {
            this.playerElem = videojs(this.$refs.playerM, {html5: {
                hls: {
                    withCredentials: false
                },
            }});
            this.playerElem.src({type: 'application/x-mpegURL', src: 'http://b90788cf.suklakakl.site/iptv/APPBERG7BRTY6L/702/index.m3u8'});
            this.playerElem.volume(1);
            this.playerElem.play();
        }
    }
</script>
