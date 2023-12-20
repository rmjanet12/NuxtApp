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

<script>
  export default {
    name: 'app',
    props: {
      category: {
        type: String,
        default: 'kids'
      }
    },
    setup(props) {
      console.log(props)
      // console.log(this.$route.params.category)

      // const route = useRoute();
      // const category = route.params.category;
      console.log(props.category)
    },
    data() {
      return {
        event1: this.category === 'drama' ? [{
            name: 'Halloween',
            url: '/images/1.jpg',
            city: 'Seattle'
          }, {
            name: 'Party Night',
            url: '/images/9.jpg',
            city: 'Taccoma'
          }] :
          [{
            name: 'High School Threatre',
            url: '/images/2.jpg',
            city: 'Seattle'
          }, {
            name: 'College Theater',
            url: '/images/3.jpg',
            city: 'Taccoma'
          }],
        event2: this.category === 'drama' ? [{
            name: 'Alice in Wonderland',
            url: '/images/8.jpg',
            city: 'Redmond'
          }, {
            name: 'Pokemon',
            url: '/images/7.jpg',
            city: 'Everete'
          }] :
          [{
            name: 'Alice in Wonderland',
            url:  '/images/14.png',
            city: 'Redmond'
          }, {
            name: 'Pokemon',
            url: '/images/4.jpg',
            city: 'Everete'
          }],
        event3: this.category === 'drama' ? [{
            name: 'Bass Monsters',
            url: '/images/11.jpg',
            city: 'Bellevue'
          }, {
            name: 'Salsa at Alki beach',
            url: '/images/5.jpg',
            city: 'Tukwila'
          }] :
          [{
            name: 'Bass Monsters',
            url: '/images/6.jpg',
            city: 'Bellevue'
          }, {
            name: 'Salsa at Alki beach',
            url: '/images/7.jpg',
            city: 'Tukwila'
          }],
      }
    },
    methods: {
      changeTitle: function (event) {
        this.msg = event.target.value;
      }
    }
  }
</script>