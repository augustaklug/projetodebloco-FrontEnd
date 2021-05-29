<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item router-link to="/">
        <b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon
        >Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active style="color: black;">Busca</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="mb-3 mt-3">
      <label for="search" class="mr-2"><b>Buscar por:</b></label>
      <input
        type="text"
        id="search"
        v-model="search"
        placeholder="Nome, categoria ou bairro..."
        style="border-radius: 4px;"
      />
    </div>

    <p class="mr-3"><b>Classificar por:</b></p>
    <b-button-group id="classificação" class="mx-auto mb-3">
      <b-button variant="dark" @click="sortDistance()">Distância</b-button>
      <b-button variant="dark" @click="sortRating()">Avaliação</b-button>
    </b-button-group>

    <resultado
      v-for="local in filteredList"
      v-bind:key="local.id"
      v-bind:local="local"
    ></resultado>
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
      search: "",
      locais: json
    };
  },
  computed: {
    filteredList() {
      return this.locais.filter(local => {
        return (
          local.nome.toLowerCase().includes(this.search.toLowerCase()) ||
          local.categoria.toLowerCase().includes(this.search.toLowerCase()) ||
          local.bairro.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  methods: {
    sortDistance() {
      this.locais.sort(function(a, b) {
        return a.distancia - b.distancia;
      });
    },
    sortRating() {
      this.locais.sort(function(a, b) {
        return b.avaliacao - a.avaliacao;
      });
    }
  }
};
</script>

<style scoped></style>
