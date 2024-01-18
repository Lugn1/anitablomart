<script>

import Sidebar from "@/components/TheSidebar.vue";
import {defineComponent} from "vue";
import {toggleSidebarOn} from "@/components/state.js";


export default defineComponent({
  methods: {toggleSidebarOn},
  components: {Sidebar}
})

</script>

<template>

  <Sidebar />
  <span class="collapse-hamb" @click="toggleSidebarOn">
  <i class="fa-solid fa-bars" ></i>
  </span>

</template>

<style scoped>

</style>