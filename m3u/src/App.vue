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

</style>
