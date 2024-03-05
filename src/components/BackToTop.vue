<template>
  <div v-if="visible" class="back-to-top" @click="scrollTop">
    <!-- You can use an arrow icon or just a simple text -->
    ↑
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.visible = window.scrollY > 500; // Change 500 to the number of pixels you want
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

}

</style>
