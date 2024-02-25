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
  <Transition name="slide">
    <div class="sidebar" :style="{ width: sidebarWidth}" v-show="!collapsed">
    <span
        class="collapse-icon"
        @click="toggleSidebarOff"
    >
      <i class="fas fa-angle-double-left fa-xl"></i>
    </span>
      <div class="link-items">
        <router-link to="/" active-class="active-link" @click="toggleSidebarOff">Hem</router-link>
        <router-link to="/gallery" active-class="active-link" @click="toggleSidebarOff">Galleri</router-link>
        <router-link to="/order" active-class="active-link" @click="toggleSidebarOff">Beställa verk</router-link>
        <router-link to="/blog" active-class="active-link" @click="toggleSidebarOff">Blogg</router-link>
        <router-link to="/about" active-class="active-link" @click="toggleSidebarOff">Om mig</router-link>
        <router-link to="/contact" active-class="active-link" @click="toggleSidebarOff">Kontakt</router-link>
      </div>

      <div class="social">
        <a href="https://www.instagram.com/ani_blom" target="_blank" rel="noopener noreferrer">
          <img src="../assets/icons/Instagram_Glyph_Gradient.png" alt="Instagram icon">
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="../assets/icons/Facebook_Logo_Primary.png" alt="Facebook icon">
        </a>
      </div>
    </div>
  </Transition>

</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-active: #276749
}
</style>

<style scoped>

.sidebar {
  //background-color: rgb(30, 140, 60);
  background-color: rgba(97, 174, 118);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 1s soft;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  padding: 0.75em;
}

.social img {
  width: auto;
  max-height: 50px;
  object-fit: cover;
}

.social {
  display: flex;
  flex-direction: row;
  width: auto;
  height: 50px;
  justify-content: center;
  gap: 10px;
  margin-top: 2em;
}

.link-items {
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
  margin-left: 10%;
  margin-top: 5em;

}

.link-items a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: "Arsenal", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Enter transition */
.slide-enter-active {
  transition: all 0.3s ease-in;
}
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

/* Leave transition */
.slide-leave-active {
  transition: all 0s ease-out;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

</style>
