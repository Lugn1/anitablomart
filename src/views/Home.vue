<script setup>

</script>

<template>
  <div class="home-container">
    <section class="intro-section">
      <h1>{{$t('Welcome')}}</h1>
      <article>
        {{$t('HomeArticle1')}}
      </article>

      <article>
        {{$t('HomeArticle2')}}
      </article>

      <article>
        {{$t('HomeArticle3')}}
      </article>
      <!--      <router-link to="/gallery">Utforska Galleriet</router-link>-->
    </section>
    <section class="hero-section">
      <img src='/src/assets/images/egentid.jpg' alt=" --- ">
    </section>

  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 5%;
}

.hero-section img {
  max-width: 100%;
  height: auto;
}

.intro-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  color: blue;
  text-decoration: none;
}

article {
  font-size: 20px;
  font-family: 'Arsenal', sans-serif;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 2%;
  text-align: left;
}
@media only screen and (max-width: 767px) {
  .home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
}
</style>

