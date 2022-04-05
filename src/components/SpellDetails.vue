<template>
  <div>
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ spell[1] }}</h2>
    <p class="mt-4 text-gray-500"><span v-html="spell[12]"></span></p>

    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Livre</dt>
        <dd class="mt-2 text-sm text-gray-500">{{ spell[0] }}</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Ecole</dt>
        <dd class="mt-2 text-sm text-gray-500">{{ spell[2] }}</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Branches</dt>
        <dd class="mt-2 text-sm text-gray-500">
          <span v-for="branch in spell[3]" :key="branch">{{ branch }}</span>
        </dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Classes</dt>
        <dd class="mt-2 text-sm text-gray-500">
          <p v-for="classes in spell[4]" :key="classes[0]">{{ classes[0] }} : {{ classes[1] }}</p>
        </dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Durée</dt>
        <dd class="mt-2 text-sm text-gray-500">{{ spell[9] }}</dd>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <dt class="font-medium text-gray-900">Résistance à la magie</dt>
        <dd class="mt-2 text-sm text-gray-500">{{ spell[11] }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'SpellDetails',
  props: ['spell']
}
</script>