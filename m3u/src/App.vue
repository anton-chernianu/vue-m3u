<template>
    <div id="app">

        <player></player>
        <!--<router-view/>-->
    </div>
</template>

<script>
    import player from '@/components/common/player';

    export default {
        name: 'App',
        components: {
            player
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
