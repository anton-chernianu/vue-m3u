<template>
    <div id="app">

        <div class="container">

            <div class="left">
                <h1 class="title">{{titleChannel}}</h1>
                <player :channel="selectChannel"></player>
                <div class="button">
                    <a  v-if="showButton" @click.prevent="prevChannel()" href="#">PREV</a>
                    <a  v-if="showButton" @click.prevent="nextChannel()" href="#">NEXT</a>
                </div>
            </div>
            <div class="right">
                <div class="vuebar-element" v-bar>
                    <ul class="list">
                        <li v-for="(channel, index) in tvChannel" class="list__item"
                            :class="{active: index === activeIndex}"
                            @click.prevent="sendChannel(index,channel[1],channel[2])"
                            :key="index">
                            {{channel[1]}}
                        </li>
                    </ul>
                </div>
            </div>

        </div>

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
        data() {
            return {
                tvChannel: dataPlaylist,
                showButton: false,
                activeIndex: null,
                titleChannel: '',
                selectChannel: '',
            }
        },
        methods: {
            sendChannel(index, title, link) {
                this.activeIndex = index;
                this.titleChannel = title;
                this.selectChannel = link;
                this.showButton = true;
            },
            prevChannel() {
                let currentId = Number(this.activeIndex) - 1;
                this.titleChannel = this.tvChannel[currentId][1];
                this.selectChannel = this.tvChannel[currentId][2];
                this.activeIndex = currentId;
            },
            nextChannel() {
                let currentId = Number(this.activeIndex) + 1;
                this.titleChannel = this.tvChannel[currentId][1];
                this.selectChannel = this.tvChannel[currentId][2];
                this.activeIndex = currentId;
            }
        },
        mounted() {
        }
    }
</script>
