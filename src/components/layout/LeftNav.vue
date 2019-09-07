<template>
  <nav>
    <router-link to="/data" v-slot="{ href, isActive }">
      <a :class="{ active: isActive }" :href="href"><div>Company Data</div></a>
    </router-link>
    <router-link to="/page" v-slot="{ href, isActive }">
      <a :class="{ active: isActive }" :href="href"><div>Company Page</div></a>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>
