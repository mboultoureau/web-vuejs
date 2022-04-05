<template>
  <!-- Header global -->
  <AppHeader @changePage="page => this.page = page" />

  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6">
        <!-- Page de sorts -->
        <AppSpell v-if="page == 'search'" :spells="spells" />

        <!-- Page de statistiques -->
        <AppStatistics v-if="page === 'statistics'" :spells="spells" />
    </div>
  </div>
</template>

<script>
import AppStatistics from './components/pages/AppStatistics.vue';
import AppHeader from './components/parts/Header.vue';
import AppSpell from './components/pages/AppSpell.vue';
import Data from './assets/data.min.js';

export default {
  name: 'App',
  data: function() {
    return {
      spells: Data,
      page: "search"
    };
  },
  components: {
    AppHeader,
    AppSpell,
    AppStatistics
  }
}
</script>
