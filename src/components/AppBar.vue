<template>
  <v-app-bar
    scroll-behavior="elevate"
    :style="{ maxWidth: maxWidth, marginLeft: 'auto', marginRight: 'auto' }"
  >
    <v-app-bar-title>
      <RouterLink
        to="/"
        class="brand-link text-decoration-none"
      >
        Amanda's Tea House
      </RouterLink>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
      variant="text"
      class="nav-btn"
      prepend-icon="mdi-star"
      to="/bes-tea"
    >
      Bes-TEAs
    </v-btn>

    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text"
          class="nav-btn"
          prepend-icon="mdi-tea"
          append-icon="mdi-chevron-down"
        >
          Teas
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="tea in teaTypes"
          :key="tea.title"
          :to="tea.to"
        >
          <v-list-item-title>{{ tea.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { RouterLink } from 'vue-router'

const { name } = useDisplay()

const maxWidth = computed(() => {
  switch (name.value) {
    case 'xs': return '540px'
    case 'sm': return '720px'
    case 'md': return '960px'
    case 'lg': return '1140px'
    case 'xl': return '1320px'
    case 'xxl': return '1320px'
    default: return '1320px'
  }
})

const teaTypes = [
  { title: 'to CHAI for', to: '/chai' },
  { title: 'TEA-licious Tisanes', to: '/tisane' },
  { title: 'Brew-TEA-ful Blacks', to: '/black-tea' },
  { title: 'Quali-TEA Greens', to: '/green-tea' },
  { title: 'White Tea', to: '/white-tea' },
  // { title: "Let's Get Oolong", to: '/oolong' },
  { title: "Pu'erh-TEA On", to: '/puerh' },
  { title: 'Yerba Mate', to: '/yerba-mate' }
]
</script>

<style scoped>
.brand-link {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  color: #344767;
}

.nav-btn {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  color: #344767 !important;
}

.v-app-bar {
  margin-top: 16px;
  margin-bottom: 16px;
  width: calc(100% - 48px);
  opacity: 1;
  border-radius: 0.75rem;
  box-shadow: 0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06);
  backdrop-filter: saturate(200%) blur(30px);
  -webkit-backdrop-filter: saturate(200%) blur(30px);
  right: 0;
  left: 0;
}
</style>
