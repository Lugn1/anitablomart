<template>
  <div v-if="visible" class="back-to-top" @click="scrollTop">
    <!-- You can use an arrow icon or just a simple text -->

    <p>{{ $t('BackToTop') }}</p>
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
      this.visible = window.scrollY > 5000; // Change 500 to the number of pixels you want
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
  bottom: 10%;
  right: 10%;
  cursor: pointer;
  z-index: 1000;
  background-color: rgb(40, 150, 60);
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 500px;
}

p {
  color: white;
  font-size: 18px;
}

</style>
