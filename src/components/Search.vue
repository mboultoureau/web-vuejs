<template>
    <div>
        <input type="search" @input="$emit('updateSearch', this.search)" v-model="search" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Rechercher un sort">
    </div>
</template>

<script>
export default {
    name: "AppSearch",
    emits: ["updateSearch"],
    data: function() {
        return {
            search: ""
        }
    }
};
</script>