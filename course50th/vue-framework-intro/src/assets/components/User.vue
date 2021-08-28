<template> <!--Must be one and only one root element-->
    <div id="user">
        <h3>User</h3>
        <p>My username is: {{ username }}</p>
    </div>

</template>

<script>
    //The exported object is just a Vue component, so you may use all the instance properties like data, props, methods etc.
    export default {
        data() {
            return {
                username: 'Max'
            }
        }
    }
</script>
<style>
        p {
            font-style: italic;
        }
</style>