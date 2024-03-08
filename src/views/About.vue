<script setup>

</script>

<template>
  <section class="main-container">
    <h1>{{ $t('About') }}</h1>

    <div class="about">
      <article>
        <p id="about-first">
          {{ $t('AboutP1') }}
        </p>
        <p>
          {{ $t('AboutP2') }}
        </p>
        <p>
          {{ $t('AboutP3') }}
        </p>
        <div class="image-container">
          <img src='/src/assets/images/utstallning.jpg' alt="Picture of me show casing one of my paintings">
          <p class="img-text">{{ $t('AboutImageText') }}</p>
        </div>

        <p>{{ $t('AboutP4') }}</p>

        <p> {{ $t('AboutP5') }}</p>

        <p> {{ $t('AboutP6') }}</p>

        <p>{{ $t('AboutP7') }}</p>
      </article>

      <div class="educations">
        <h3 id="title">{{ $t('AboutHeader2') }}</h3>
        <h4 id="courses">
          {{ $t('Course1') }}
          <br>
          {{ $t('Course2') }}
          <br>
          {{ $t('Course3') }}
          <br>
          {{ $t('Course4') }}
          <br>
          {{ $t('Course5') }}
          <br>
          {{ $t('Course6') }}
        </h4>
      </div>
    </div>

  </section>
</template>

<style scoped>

.img-text {
  margin: 0;
  font-size: 0.6em;
  text-align: center;
  font-style: italic;
}


.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 80%;
}

.image-container {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}

#title {
  margin-bottom: 0;
}
#courses {
  margin-top: 15px;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
}

.about img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
}

p {
  margin-top: 0;
  line-height: 1.6;
}


.educations {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: left;

}


@media only screen and (max-width: 767px) {
  .about {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .about img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 100%;
    height: auto;
  }

  .educations {
    width: 100%;
  }
}

</style>

