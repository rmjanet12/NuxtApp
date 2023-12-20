<template>
    <div>

  <div>
        <a href="#" data-toggle="tooltip" title="Hooray!">Events around Seattle</a>   <!--Tooltip-->
        <div class="row1">
            <div class="item-1" v-for="x in event1" :key="x.url">
                <!-- <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
                <p class="event-name">{{ x.name }}<br>{{ x.city }}</p> -->
                <Image :src="x.url" :alt="x.name" :title="x.name" :city="x.city"  :state="x.state" />
            </div>
        </div>
        <div class="row1">
          <div class="item-1" v-for="x in event2"  :key="x.name">
            <Image :src="x.url" :alt="x.name" :title="x.name" :city="x.city"  :state="x.state" />
            </div>
        </div>
        <div class="row1">
          <div class="item-1" v-for="x in event3"  :key="x.name">
            <Image :src="x.url" :alt="x.name" :title="x.name" :city="x.city" :state="x.state" />
          </div>
        </div>
  </div>
</div>

</template>

<script setup>

import Image from "../../components/ImageComponent.vue"; // A
        const [{ data: event1 }, { data: event2 },{ data: event3 }] = await Promise.all([
            useFetch('/api/events/1'),
            useFetch('/api/events/2'),
            useFetch('/api/events/3'),
        ])
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
