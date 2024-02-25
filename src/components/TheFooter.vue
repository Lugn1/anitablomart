<script setup>

</script>

<template>
<section class="main-container">
  <article class="top-row-container">
    <div class="link-items">
      <router-link to="/" active-class="active-link">{{$t('Home')}}</router-link>
      <router-link to="/gallery" active-class="active-link">{{$t('Gallery')}}</router-link>
      <router-link to="/order" active-class="active-link">{{$t('Order works')}}</router-link>
      <router-link to="/blog" active-class="active-link">{{$t('Blog')}}</router-link>
      <router-link to="/about" active-class="active-link">{{$t('About')}}</router-link>
      <router-link to="/contact" active-class="active-link">{{$t('Contact')}}</router-link>
    </div>
  </article>
  <article class="bottom-row-container">
    <div id="copyright">
      Copyright 2024 @ Anita Blom
    </div>
    <div class="social-links">
      <a href="https://www.instagram.com/ani_blom" target="_blank" rel="noopener noreferrer">
        <img src="../assets/icons/instagram_footer.png" alt="Instagram icon">
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="../assets/icons/facebook_footer.png" alt="Facebook icon">
      </a>
    </div>
  </article>
</section>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  box-sizing: border-box;
  background-color: rgba(40, 150, 60, 70%);
}

.top-row-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.bottom-row-container {
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 3%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 12px;
}


.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  gap: 25%;

}

.social-links img {
  width: auto;
  max-height: 25px;
  object-fit: cover;
}

.link-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  width: 100%;
  text-decoration: none;

}

.link-items a {
  text-decoration: none;
  color: #333;
  cursor: default;
}

@media only screen and (max-width: 800px) {
  .main-container {
    height: 100px;
    margin-top: 10%;
  }
  .link-items {
    gap: 3%;
  }
  .social-links {
    gap: 10px;
  }

  .bottom-row-container {
    margin-top: 0;
    margin-bottom: 5px;
  }

  .top-row-container {
    margin-bottom: 0;
  }
}


</style>
