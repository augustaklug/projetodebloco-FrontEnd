<template>
  <div id="app">
    <MyNav />

    <router-view />

    <MyFooter />
  </div>
</template>

<script>
import MyNav from "./components/nav.vue";
import MyFooter from "./components/footer.vue";

export default {
  components: {
    MyNav,
    MyFooter
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700&display=swap");
#app {
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: "Lato", sans-serif;
}

h1 {
  font-family: "Montserrat", sans-serif;
}
</style>
