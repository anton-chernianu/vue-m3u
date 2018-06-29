<template>
    <div id="player">
        <video ref="playerM" id="playerMMM" width=600 height=300 class="video-js vjs-default-skin" controls>
            <source
                    src="http://cdnworld.magictvbox.eu/Discovery_Showcase_HD/tracks-v2a1/index.m3u8?token=b04f6e1d3917019e1ca2559684a5aad5673f376e"
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
