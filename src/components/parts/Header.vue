<template>
  <div class="relative bg-white">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Spells</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
          </a>
        </div>

        <nav class="md:flex space-x-10">
          <a style="cursor: pointer;" @click="$emit('changePage', 'search')" class="text-base font-medium text-gray-500 hover:text-gray-900"> Accueil </a>
          <a style="cursor: pointer;" @click="$emit('changePage', 'statistics')" class="text-base font-medium text-gray-500 hover:text-gray-900"> Statistiques </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>