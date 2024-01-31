<script setup>

</script>

<template>
  <div class="main-container">
    <h1>{{$t('About')}}</h1>
    <div class="about">
      <div class="firstParagraph" >
      <div class="image-title-container">
        <p><img src='/src/assets/images/utställning.jpg' alt="Kolibri"></p>
        <p class="image-title">{{$t('AboutImageText')}}</p>
      </div>
          <p>
            {{$t('AboutP1')}}
          </p>

          <p>
            {{$t('AboutP2')}}
          </p>
          <p>
            {{$t('AboutP3')}}
          </p>

      <p>{{$t('AboutP4')}}</p>

      <p> {{$t('AboutP5')}}</p>
      <p> {{$t('AboutP6')}}</p>

      <p>{{$t('AboutP7')}}</p>
    </div>

    <div class="educations">
      <h4>{{$t('AboutHeader2')}}</h4>

      <h4>
          {{$t('Course1')}}
          <br>
          {{$t('Course2')}}
          <br>
          {{$t('Course3')}}
          <br>
          {{$t('Course4')}}
      </h4>

    </div>
  </div>
    </div>
</template>

<style scoped>

.image-title-container {
  float: right;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  width: 70%;

}

.about img {
  width: auto;
  height: 500px;
  margin-left: 24px;
  margin-top: 10px;
  float: right;

}

p {
  font-size: 20px;
  font-family: 'Arsenal', sans-serif;
  line-height: 1.6;
}

.image-title {
  font-size: 12px;
  font-style: italic;
  color: black;
  float: right;
  margin-top: 0;
}

.educations {
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 70%;

}
@media only screen and (max-width: 767px) {
  .about {
    width: 100%;
    flex-direction: column-reverse;
  }

  .about img {
    float: none;
    margin: 10px auto;
    width: auto;
    height: 300px;
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

