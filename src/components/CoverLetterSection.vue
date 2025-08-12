<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { coverLetterData } = defineProps({
  coverLetterData: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <LineItem v-if="coverLetterData">
    <template #icon>
      <i class="i-tabler-file-text text-3xl" />
    </template>
    <template #heading>Cover Letter</template>
    <p>{{ coverLetterData }}</p>
  </LineItem>
</template>
