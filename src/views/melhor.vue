<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item router-link to="/">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#home">Atrações</b-breadcrumb-item>
      <b-breadcrumb-item active href="#home">O Melhor da Cidade</b-breadcrumb-item>
    </b-breadcrumb>

    <h3
      style="margin-top: 2em; margin-bottom: 2em; font-weight: 900; text-decoration: underline;"
    >O Melhor de Florianópolis</h3>

    <p class="mr-3"><b>Classificar por:</b></p> 
    <b-button-group id="classificação" class="mx-auto mb-3">           
      <b-button variant="info" @click="sortDistance()">Distância</b-button>
      <b-button variant="info" @click="sortRating()">Avaliação</b-button>      
    </b-button-group>

    <resultado v-for="local in melhores" v-bind:key="local.id" v-bind:local="local"></resultado>
  </div>
</template>

<script>
import resultado from "@/components/resultado.vue";
import json from "@/assets/MOCK_DATA.json";

export default {
  components: {
    resultado
  },
  data() {
    return {
      locais: json,
    };
  },
  methods: {
    sortDistance(){
      this.locais.sort(function(a, b) {
            return a.distancia - b.distancia;
    })
    },
    sortRating(){
      this.locais.sort(function(a, b) {
            return b.avaliacao - a.avaliacao;
          })
    },
  },
  computed: {
    melhores(){
        return this.locais.filter(x => x.avaliacao >= 4)
    }
},
};
</script>

<style scoped>
</style>