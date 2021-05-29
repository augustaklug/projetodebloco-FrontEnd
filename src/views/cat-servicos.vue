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
      <b-breadcrumb-item active href="#home" style="color: black;"
        >Serviços Públicos</b-breadcrumb-item
      >
    </b-breadcrumb>

    <h3
      style="margin-top: 2em; margin-bottom: 2em; font-weight: 900; text-decoration: underline;"
    >
      Serviços Públicos
    </h3>

    <b-container fluid="sm">
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Delegacia" active
            ><b-card-text
              ><resultado
                v-for="local in delegacias"
                v-bind:key="local.id"
                v-bind:local="local"/></b-card-text
          ></b-tab>
          <b-tab title="Hospital"
            ><b-card-text
              ><resultado
                v-for="local in hospitais"
                v-bind:key="local.id"
                v-bind:local="local"/></b-card-text
          ></b-tab>
          <b-tab title="Banheiro"
            ><b-card-text
              ><resultado
                v-for="local in banheiros"
                v-bind:key="local.id"
                v-bind:local="local"/></b-card-text
          ></b-tab>
        </b-tabs>
      </b-card>
    </b-container>
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
      locais: json
    };
  },
  mounted: function() {
    this.locais.sort(function(a, b) {
      return a.distancia - b.distancia;
    });
  },
  computed: {
    delegacias() {
      return this.locais.filter(x => x.categoria == "Delegacia");
    },
    hospitais() {
      return this.locais.filter(x => x.categoria == "Hospital");
    },
    banheiros() {
      return this.locais.filter(x => x.categoria == "Banheiro");
    }
  }
};
</script>
