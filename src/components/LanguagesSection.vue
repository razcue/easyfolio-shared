<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { languageData } = defineProps({
  languageData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem v-if="languageData">
    <template #icon>
      <i class="i-tabler-language text-3xl" />
    </template>
    <template #heading>Languages</template>
    <ul>
      <li
          v-for="(language, index) in languageData"
          :key="index"
      >
        <strong>{{ language.name }}:</strong>
        {{ language.level }}
      </li>
    </ul>
  </LineItem>
</template>
