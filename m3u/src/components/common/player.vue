<template>
    <div id="player">
        <!--https://webarmen.com/my/iptv/auto.nogrp.m3u-->
        <video ref="playerM" id="playerMMM" width=800 height=400 class="video-js vjs-default-skin" controls>
            <source
                    src="http://b90788cf.suklakakl.site/iptv/APPBERG7BRTY6L/131/index.m3u8"
                    type="application/x-mpegURL">
        </video>
    </div>
</template>

<script>
    import videojs from 'video.js';
    import videoPlayer from 'videojs-contrib-hls';

    export default {
        name: 'player',
        components: {
        },
        data() {
            return{
            }
        },
        mounted() {
            let playerID = document.querySelector('#playerMMM');
            let playerElem = videojs(playerID, {html5: {
                hls: {
                    withCredentials: false
                }
            }});
            playerElem.play();

        }

    }
</script>
