<script setup>

</script>

<template>
  <div class="main-container">
    <section class="title">
      <h1>{{$t('OrderHeading')}} </h1>
      <article class="italic-article">
        {{$t('OrderArticle1')}}
      </article>
    </section>
    <section class="content">
      <h2>{{$t('OrderHeading2')}} </h2>
      <article>{{$t('OrderArticle2')}}
      </article>
    </section>
    <section>
      <h2>{{$t('OrderHeading3')}}</h2>
      <article>{{$t('OrderArticle3')}}
      </article>
    </section>
    <section>
      <h2>{{$t('OrderHeading4')}} </h2>
      <article>{{$t('OrderArticle4')}}
      </article>
    </section>
    <section>
      <h2>{{$t('OrderHeading5')}} </h2>
      <article class="italic-article">{{$t('OrderArticle5')}}
      </article>
      <article class="italic-article">
        {{$t('OrderArticle6')}}</article>
    </section>

    <!--      <router-link to="/contact" class="contact">Kontakta mig</router-link>-->

  </div>
</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

section {
  display: flex;
  text-align: left;
  flex-direction: column;
}

.content {
  margin-top: 5%;
}

article {
  display: flex;
  flex-direction: column;
  font-family: 'Arsenal', sans-serif;
  line-height: 1.6;
  font-style: normal;
}

.italic-article {
  font-style: italic;
}
@media only screen and (max-width: 850px) {
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 2%;
  }
}

</style>
