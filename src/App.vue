<template>
  <div>
    <RouterLink to="/app1">Home</RouterLink>
    <RouterLink to="/app1/link2">Link</RouterLink>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted() {}
}
</script>
