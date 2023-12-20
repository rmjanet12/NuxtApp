<template>
  <div>

  <div>
    <a href="#" data-toggle="tooltip" title="Hooray!">Events around Seattle</a>
    <!--Tooltip-->
    <div class="row1">
      <div class="item-1" v-for="x in event1" :key="x.name">
        <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
        <p class="event-name">{{ x.name }}<br>{{ x.city }}</p>
      </div>
    </div>
    <div class="row1">
      <div class="item-1" v-for="x in event2" :key="x.name">
        <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
        <p class="event-name">{{ x.name }}<br>{{ x.city }}</p>
      </div>
    </div>
    <div class="row1">
      <div class="item-1" v-for="x in event3" :key="x.name">
        <img class="img-fluid img-thumbnail" v-bind:src="x.url" alt="event one">
        <p class="event-name">{{ x.name }}<br>{{ x.city }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

        const [{ data: event1 }, { data: event2 },{ data: event3 }] = await Promise.all([
            useFetch('/api/drama/1'),
            useFetch('/api/drama/2'),
            useFetch('/api/drama/3'),
        ])
</script>