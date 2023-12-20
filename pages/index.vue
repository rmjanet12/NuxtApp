<template>
<div>hello world
</div>
</template>


<!-- <script>

export default{
  middleware({ navigateTo }) {
    return navigateTo('/events');
  }
};
</script> -->


<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});
</script>