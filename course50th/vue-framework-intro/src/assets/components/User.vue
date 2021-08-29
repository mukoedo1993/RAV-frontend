<template> <!--Must be one and only one root element-->
    <div id="user">
        <h3>User</h3>
        <p>My username is: {{ username }}</p>
        <app-info></app-info> <!--components here-->
       
    </div>

</template>

<script>

    import Info from './info.vue';  //So, we in main.js will only need to 

    //The exported object is just a Vue component, so you may use all the instance properties like data, props, methods etc.
    export default {
        

        data() {
            return {
                username: 'Max'
            }
        },
        components: {
            'app-info': Info
        }
    }
</script>
<style scoped>

        p {
            font-style: italic;
        }
        /*By default, all of our styles are treated as global styles.
        But, we can add a scoped attribute on style
        */

</style>