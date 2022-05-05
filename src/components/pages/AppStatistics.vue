<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Statistiques</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Quelques nombres sur les sorts
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Nombre de sorts</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ spells.length }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Ecoles</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul>
              <li v-for="(value, key) in schoolsCount" :key="key">
                {{ key }} : {{ value }}
              </li>
            </ul>
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Livres</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul>
              <li v-for="(value, key) in livresCount" :key="key">
                {{ key }} : {{ value }}
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import livres from "../../scripts/livres";

export default {
  name: "AppStatistics",
  props: ["spells"],
  computed: {
    schoolsCount() {
      let schools = {};
      this.spells.forEach((spell) => {
        if (schools[spell[2]] != undefined) {
          schools[spell[2]] = schools[spell[2]] + 1;
        } else {
          schools[spell[2]] = 0;
        }
      });

      return schools;
    },
    livresCount() {
      return livres(this.spells);
    },
  },
};
</script>