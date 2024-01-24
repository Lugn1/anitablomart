<script setup>

</script>

<template>
  <div class="home-container">
    <section class="intro-section">
      <h1>Välkommen till Anita Blom Art</h1>
      <article>Välkommen till min konstnärliga värld, där penseln blir mitt redskap

        för att gestalta naturens magi. Målningarna är en hyllning till den

        storslagna skönhet som naturen omger oss med.

        Min önskan är att mina alster kan påminna betraktaren om att det

        finns en värld bortom vår hektiska vardag. En värld fylld av

        fridfull skönhet och enkel glädje som bara väntar på att bli upptäckt och

        omfamnad.

        Jag tror på naturens osynliga kraft att läka och ge energi.
      </article>

      <article>
        I synnerhet fascineras jag av fåglar, dessa lätta varelser som gärna landar på

        duken och blir en del av min konstnärliga berättelse. Deras närvaro förstärker

        budskapet om frihet och lätthet i mitt arbete.
      </article>

      <article>

        Här och var dyker andra små levande varelser upp i en målning som

        kombinerar expressionism med det figurativa.
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
</style>

