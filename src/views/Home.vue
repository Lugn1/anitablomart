<script setup>

</script>

<template>
  <section class="home-container">
    <div class="intro-container">
      <section class="text-image">
        <a href="/src/assets/images/anitablomart_hager_heron.jpg" target="_blank">
          <img src='/src/assets/images/anitablomart_hager_heron.jpg' alt="Painting of a heron">
        </a>
      </section>
      <section class="intro-section">
        <h1>{{ $t('Welcome') }}</h1>
        <article>
          {{ $t('HomeArticle1') }}
        </article>

        <article>
          {{ $t('HomeArticle2') }}
        </article>

        <article>
          {{ $t('HomeArticle3') }}
        </article>
      </section>
    </div>
    <div class="image-container">
      <a href="/src/assets/images/anitablom_hagrar_herons.jpg" target="_blank">
        <img src="/src/assets/images/anitablom_hagrar_herons.jpg" alt="Painting of herons in water">
      </a>
    </div>
  </section>
</template>

<style scoped>

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1%;
}

.intro-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  margin-bottom: 0;
}

.text-image {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 5%;
}

a {
  cursor: default;
}

.text-image img {
  max-width: 100%;
  height: auto;

}

.intro-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 2em;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.image-container img {
  max-width: 100%;
  height: auto;
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

