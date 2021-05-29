<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky="true">
    <b-navbar-brand tag="h1" class="mb-0">
      <img
        src="https://image.flaticon.com/icons/svg/1020/1020321.svg"
        alt="SGE Logo"
        width="30"
      />
      SGE
      <b-nav-text style="font-style: italic;"
        ><small>Grandes Eventos</small></b-nav-text
      >
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item router-link to="/"
          ><i class="fas fa-home" /> Home</b-nav-item
        >
        <b-nav-item router-link to="/atracoes"
          ><i class="fas fa-landmark" /> Atrações</b-nav-item
        >
        <b-nav-item router-link to="/restaurantes"
          ><i class="fas fa-utensils" /> Onde Comer</b-nav-item
        >
        <b-nav-item router-link to="/hoteis"
          ><i class="fas fa-bed" /> Onde Dormir</b-nav-item
        >
        <b-nav-item router-link to="/servicos"
          ><i class="fas fa-ambulance" /> Serviços</b-nav-item
        >
        <b-nav-item router-link to="/busca"
          ><i class="fas fa-search" /> Buscar</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "MyNav"
};
</script>
