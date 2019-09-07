<template>
  <main>
    <BreadCrumbs />
    <div class="main-content">
      <LeftNav />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumbs from "./BreadCrumbs.vue";
import LeftNav from "./LeftNav.vue";

export default {
  components: {
    BreadCrumbs,
    LeftNav
  }
};
</script>
