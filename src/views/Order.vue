<script setup>

</script>

<template>
  <div class="main-container">
    <section>
      <h1>Beställa ett unikt konstverk </h1>
      <article class="italic-article">Välkommen till min värld av halvabstrakt konst, där kreativitet och individualitet förenas för att skapa
        unika
        och personliga konstverk. Jag erbjuder dig möjligheten att beställa ett skräddarsytt konstverk, skapat med min
        karakteristiska stil som kombinerar expressionism med subtila figurativa element.
      </article>
    </section>
    <section>
      <h2>Om min konststil </h2>
      <article>Min konst är en halvabstrakt gestaltning som försiktigt möter figurativa inslag. Varje penseldrag är en
        nyckel
        till ett uttryck, och varje färgval bär med sig emotionell laddning. Genom att kombinera det abstrakta med det
        figurativa skapar jag konstverk som både utmanar och behagar ögat, och som kan ge olika tolkningar för varje
        betraktare.
      </article>
    </section>
    <section>
      <h2>Hur beställningen fungerar </h2>
      <article>Att beställa konstverk från mig är en personlig och interaktiv process. Vi inleder med en dialog där vi
        diskuterar dina idéer, preferenser och förväntningar. Det kan vara specifika färger, teman eller känslor du
        önskar
        förmedla genom konstverket. Genom denna öppna kommunikation strävar jag efter att förstå och införliva dina
        tankar
        i mitt skapande.
      </article>
    </section>
    <section>
      <h2>Tidsaspekt </h2>
      <article>Efter vår initiala diskussion och överenskommelse på konceptet, kommer jag att ge dig en uppskattning av
        tiden
        det tar att slutföra konstverket. Detta kan variera beroende på storlek och komplexitet, men mitt mål är att
        leverera högkvalitativ konst inom rimlig tid.
      </article>
    </section>
    <section>
      <h2>Varför beställa ett unikt konstverk </h2>
      <article class="italic-article">Ett skräddarsytt konstverk är mer än bara en dekorativ detalj i ditt hem eller kontor. Det är en personlig
        reflektion av din smak, din historia och dina känslor. Genom att investera i ett unikt konstverk får du något
        som
        är helt och hållet ditt eget, en skatt som berättar din historia på ett visuellt och kreativt sätt.
      </article>
      <article class="italic-article">
        Tveka inte att ta kontakt för att inleda vår konstnärliga dialog och skapa något extraordinärt tillsammans. Låt
        oss skapa konst med mening och djup som berör själen. </article>
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
  width: 40%;
  margin-top: 2%;
}

section {
  display: flex;
  text-align: left;
  flex-direction: column;
}

article {
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 2%;
  font-size: 18px;
  font-family: 'Arsenal', sans-serif;
  line-height: 1.6;
  font-style: normal;
}

.italic-article {
  font-style: italic;
}

</style>
