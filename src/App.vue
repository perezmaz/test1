<template>
  <div class="container" id="app">
    <section class="sidebar">
      <ul>
        <li>
          <RouterLink to="/dashboard">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/form">Example Form</RouterLink>
        </li>
      </ul>
    </section>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted() { }
}
</script>
