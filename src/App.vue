<template lang="jade">
  nav(role="navigation").navbar.navbar-default.navbar-static-top
      a(v-link="{path: '/', exact:true}").navbar-brand {{title}}
      ul.nav.navbar-nav
        li(v-link-active)
          a(v-link="{path: '/todos', activeClass:'active'}") Todos
        li(v-link-active)
          a(v-link="{path: '/users', activeClass:'active'}") Users
  router-view
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      title: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
