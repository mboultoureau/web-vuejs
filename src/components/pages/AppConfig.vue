<template>
    <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Configuration</h1>
    <div class="field">
        <label>Restreindre la recherche sur le livre :</label>
        <div class="select">
            <select @change="changeFilter($event.target.value)">
                <option value="all">Tous</option>
                <option v-for="(value, key) in livres" :key="key">{{ key }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import livres from "../../scripts/livres";

export default {
    name: 'AppConfig',
    props: ['spells'],
    computed: {
        livres() {
            return livres(this.spells);
        }
    },
    methods: {
        changeFilter(livre) {
            localStorage.setItem('livreFilter', livre);
        }
    }
}
</script>