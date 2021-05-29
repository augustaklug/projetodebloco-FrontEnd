<template>
  <div style="width: 75%; margin: auto" class="mt-5">
    <h3 style="font-style: italic; margin-bottom: 1em;">
      Conheça o melhor de cada bairro
    </h3>
    <b-card-group deck>
      <b-card
        title="Norte da Ilha"
        img-src="@/assets/norte.jpg"
        img-alt="Praia de Jurerê"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
        <b-button router-link to="/norte" variant="dark">Veja mais</b-button>
      </b-card>

      <b-card
        title="Sul da Ilha"
        img-src="@/assets/sul.jpg"
        img-alt="Ilha do Campeche"
        img-top
      >
        <b-card-text
          >This card has supporting text below as a natural lead-in to
          additional content.</b-card-text
        >
        <b-button router-link to="/sul" variant="dark">Veja mais</b-button>
      </b-card>

      <b-card
        title="Lagoa da Conceição"
        img-src="@/assets/lagoa.jpg"
        img-alt="Mirante da Lagoa"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </b-card-text>
        <b-button router-link to="/lagoa" variant="dark">Veja mais</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "cardsHome"
};
</script>

<style scoped>
</style>