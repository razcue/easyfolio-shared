<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { skillsData } = defineProps({
  skillsData: {
    type: Object,
    required: true,
  },
});

const formatKey = (key: string): string =>
    key
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
        .replace(/^[a-z]/, (char) => char.toUpperCase()); // Capitalize the first letter
</script>

<template>
  <LineItem v-if="skillsData">
    <template #icon>
      <i class="i-tabler-tools text-3xl" />
    </template>
    <template #heading>Skills</template>
    <ul>
      <li v-for="(value, key) in skillsData" :key="key">
        <strong>{{ formatKey(key) }}:</strong>
        {{ value.join(", ") }}
      </li>
    </ul>
  </LineItem>
</template>
