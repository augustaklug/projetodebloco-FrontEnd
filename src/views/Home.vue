<template>
  <div class="home">
    <b-breadcrumb>
      <b-breadcrumb-item active href="#home" style="color: #424242">
        <b-icon
          icon="house-fill"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon
        >Home
      </b-breadcrumb-item>
    </b-breadcrumb>
    <banner />
    <cardsHome />
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "@/components/banner.vue";
import cardsHome from "@/components/cardsHome.vue";

export default {
  name: "Home",
  components: {
    banner,
    cardsHome
  },
  data() {
    return {};
  }
};
</script>
