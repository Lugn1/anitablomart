<script setup>

</script>

<template>
  <section class="main-container">

    <h1>{{ $t('About') }}</h1>
    <div class="about">
      <div class="image-container">
        <img src='/src/assets/images/utställning.jpg' alt="Picture of me show casing on of my paintings">
      </div>
      <div class="firstParagraph">
        <p id="about-first">
          {{ $t('AboutP1') }}
        </p>
        <p>
          {{ $t('AboutP2') }}
        </p>
        <p>
          {{ $t('AboutP3') }}
        </p>

        <p>{{ $t('AboutP4') }}</p>

        <p> {{ $t('AboutP5') }}</p>
        <p> {{ $t('AboutP6') }}</p>

        <p>{{ $t('AboutP7') }}</p>
      </div>

      <div class="educations">
        <h4>{{ $t('AboutHeader2') }}</h4>

        <h4>
          {{ $t('Course1') }}
          <br>
          {{ $t('Course2') }}
          <br>
          {{ $t('Course3') }}
          <br>
          {{ $t('Course4') }}
          <br>
          {{ $t('Course5') }}
        </h4>

      </div>
    </div>
  </section>
</template>

<style scoped>

.image-title-container {
  float: right;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.about {
  width: 70%;
}

.about img {
  width: auto;
  max-width: 80%;
  height: auto;
  margin-left: 24px;
  float: right;

}

p {
  font-family: 'Arsenal', sans-serif;
  line-height: 1.6;
}


.educations {
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 70%;

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
    margin: 10px auto;
    width: auto;
    max-width: 100%;
    height: auto;
  }

  .educations {
    width: 100%;
  }

  .image-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%
  }

  .firstParagraph {
    display: flex;
    flex-direction: column-reverse;
  }
}

</style>

