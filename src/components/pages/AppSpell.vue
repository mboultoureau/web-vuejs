<template>
  <!-- Barre de recherche, met à jour le texte search lors de la modification du champ -->
  <AppSearch @updateSearch="search => this.search = search" />

  <p>{{ spellSearched.length }} sorts correspondants à votre recherche</p>

  <!-- Boucle avec les sorts recherchés -->
  <SpellDetails v-for="spell in spellSearched" :key="spell[1] + spell[2]" :spell="spell" />
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
      let spells = this.spells;
      let livreFilter = localStorage.getItem('livreFilter') || 'all';

      // Filtre sur les livres
      if (livreFilter != 'all') {
        spells = spells.filter(spell => spell[0] == livreFilter);
      }

      // Filtre sur la recherche
      return spells.filter((spell) => spell[1].toLowerCase().includes(this.search.toLowerCase()));
    }
  }
}
</script>
