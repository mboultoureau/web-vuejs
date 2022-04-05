<template>
  <AppSearch @updateSearch="search => this.search = search" />
  <SpellDetails v-for="spell in spellSearched" :key="spell[1]" :spell="spell" />
</template>

<script>
import SpellDetails from '../SpellDetails.vue';
import AppSearch from '../Search.vue';

export default {
  name: 'AppSpell',
  props: ["spells"],
  data: function() {
    return {
      search: ""
    };
  },
  components: {
    SpellDetails,
    AppSearch,
  },
  computed: {
    spellSearched() {
      return this.spells.filter((spell) => spell[1].toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>
