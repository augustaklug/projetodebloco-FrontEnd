<template>
  <div>
    <div style="display: block; max-width: 80%; margin: auto">
      <b-img src="@/assets/ponte.jpg" fluid alt="Responsive image"></b-img>

      <h1 style="margin-top: 1em; font-weight: 900; font-variant: small-caps;">
        Bem Vindo!
      </h1>
      <h3 style="margin-top: 1em; font-style: italic;">
        Encontre aqui o melhor de Florianópolis
      </h3>
      <b-button
        router-link
        to="/melhor"
        variant="dark"
        style="margin-top: 1em ;margin-bottom: 2em;"
        >Veja mais ></b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "banner"
};
</script>

<style scoped>
</style>