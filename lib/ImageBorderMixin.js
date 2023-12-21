export const ImageBorderMixin = {
    data() {
      return {
        hover: false,
      };
    },
    computed: {
      borderStyle() {
        return this.hover == true ? '8px solid orange' : '8px solid transparent';
      },
    },
    methods: {
      toggleBorder() {
        this.hover = !this.hover;
      },
    },
  };
