<template>
  <b-container fluid="sm">
    <b-card
      class="overflow-hidden"
      style="max-width: 60em; margin: auto; margin-bottom: 2em;"
      :header="local.categoria"
      border-variant="info"
      header-border-variant="info"
      header-bg-variant="secondary"
      header-text-variant="white"
    >
      <b-row>
        <b-col md="6">
          <b-card-img
            :src="local.imagem"
            :alt="local.nome"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="local.nome">
            <b-card-text style="text-align: start;">{{
              local.descricao
            }}</b-card-text>
            <b-list-group flush>
              <b-list-group-item>Bairro: {{ local.bairro }}</b-list-group-item>
              <b-list-group-item
                >Distância: {{ local.distancia }}km</b-list-group-item
              >
              <b-list-group-item>
                Avaliação:
                <star-rating
                  read-only="true"
                  :increment="0.5"
                  inline
                  :item-size="15"
                  :spacing="-2"
                  :rating="local.avaliacao"
                ></star-rating>
              </b-list-group-item>
            </b-list-group>
          </b-card-body>
          <b-button variant="dark" v-b-modal="'myModal' + local.id"
            >Mais detalhes</b-button
          >
          <b-modal
            :id="'myModal' + local.id"
            size="lg"
            :title="local.nome"
            centered
            scrollable
            header-bg-variant="secondary"
            header-text-variant="white"
            okVariant="success"
            ok-only="true"
            ok-title="Fechar"
          >
            <b-container fluid>
              <p>
                <b>Descrição:</b>
                {{ local.descricao }}
              </p>
              <p>
                <b>Avaliação:</b>
                <star-rating
                  read-only="true"
                  :increment="0.5"
                  inline
                  :item-size="15"
                  :spacing="-2"
                  :rating="local.avaliacao"
                />
              </p>
              <p>
                <b>Distância:</b>
                {{ local.distancia }}km
              </p>
              <p>
                <b>Telefone:</b>
                {{ local.telefone }}
              </p>
              <p>
                <b>Email:</b>
                {{ local.email }}
              </p>
              <p>
                <b>Endereço:</b>
                {{ local.endereco }}
              </p>
              <iframe
                width="100%"
                height="auto"
                frameborder="0"
                style="border:0"
                :src="
                  `https://www.google.com/maps/embed/v1/place?key=AIzaSyBRxTAWtsHtRRg2zhv9ZNoVHi8acNrHm4A
    &q=` +
                    local.latitude +
                    ',' +
                    local.longitude
                "
                allowfullscreen
              ></iframe>
            </b-container>
          </b-modal>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { StarRating } from "vue-rate-it";

export default {
  components: {
    StarRating
  },
  name: "resultado",
  props: ["local"]
};
</script>

<style scoped>
@media (max-width: 960px) {
  b-card {
    max-width: 90%;
  }
}
</style>
