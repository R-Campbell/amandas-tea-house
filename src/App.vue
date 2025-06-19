<template>
  <v-responsive>
    <v-app>
      <AppBar />
      <v-main>
        <RouterView />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from '@/components/AppBar.vue'
</script>

<style scoped>
/* App-bar styles moved to AppBar.vue component */

.v-main {
  padding-top: 0 !important;
}
</style>
