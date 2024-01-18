<script>
import {collapsed, sidebarWidth, toggleSidebarOff} from "@/components/state.js";

export default {
  methods: {toggleSidebarOff},
  props: {},
  setup() {
    return {collapsed, toggleSidebarOff, sidebarWidth}
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth}" v-show="!collapsed">
    <span
      class="collapse-icon"
      @click="toggleSidebarOff"
    >

      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>

<style>
:root{
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749
}
</style>

<style scoped>

.sidebar {
background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
position: absolute;
  padding: 0.75em;
}
</style>