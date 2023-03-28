<template>
  <div class="bds-application">
    <section id="bds-sidebar" class="bds-sidebar bds-sidebar-open">
      <ul>
        <li>
          <RouterLink to="/dashboard">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/form">Example Form</RouterLink>
        </li>
      </ul>
    </section>
    <section id="bds-content" class="bds-content bds-content-full">
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
