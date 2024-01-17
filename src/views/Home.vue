<script setup>

</script>

<template>
  <div class="home-container">
    <section class="intro-section">
      <h1>Välkommen till Anita Blom Art</h1>
      <p>Välkommen till min konstnärliga värld, där penseln blir mitt redskap

        för att gestalta naturens magi. Målningarna är en hyllning till den

        storslagna skönheten som omger oss.

        Min önskan är att de kan påminna betraktaren om att det finns en värld

        bortom vår många gånger hektiska vardag. En värld fylld av fridfull skönhet

        och enkel glädje som bara väntar på att bli upptäckt och omfamnad. Jag tror

        på naturens osynliga kraft att läka och ge energi.



        I synnerhet fascineras jag av fåglar, dessa lätta varelser som gärna landar på

        duken och blir en del av min konstnärliga berättelse. Deras närvaro förstärker

        budskapet om frihet och lätthet i mitt arbete. </p>
      <router-link to="/gallery">Utforska Galleriet</router-link>
    </section>
    <section class="hero-section">
    <!-- <img src='/src/assets/images/???' alt=" --- "> -->
    </section>

  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
}

.hero-section {
  padding: 20px;
}

.hero-section img {
  max-width: 100%;
  height: auto;
}

.intro-section {
  margin-top: 40px;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  color: blue;
  text-decoration: none;
}
</style>

