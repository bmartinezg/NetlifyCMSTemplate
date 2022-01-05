<template>
  <client-only>
    <b-navbar fixed-top shadow wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img :src="headerData.es.logo" alt="Logo" />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="/">Inicio</b-navbar-item>
        <b-navbar-item>
          <nuxt-link to="/terms-and-conditions">MarkDownText-i18n</nuxt-link>
        </b-navbar-item>
        <b-navbar-item>
          <nuxt-link to="/checkout">Checkout</nuxt-link>
        </b-navbar-item>
        <b-navbar-item>
          <nuxt-link to="/email">Email</nuxt-link>
        </b-navbar-item>
        <b-navbar-item>
          <nuxt-link to="/form">Form</nuxt-link>
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item>About</b-navbar-item>
          <b-navbar-item>Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </client-only>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',

  computed: {
    ...mapState(['headerData']),
  },
}
</script>
