<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { experienceData } = defineProps({
  experienceData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem v-if="experienceData">
    <template #icon>
      <i class="i-tabler-building-skyscraper text-3xl" />
    </template>
    <template #heading> Selected Experience </template>
    <article
        v-for="(experience, index) in experienceData"
        :key="index"
        class="mb-4 border-b border-[var(--color-border)] pb-3 last:border-none last:mb-0 last:pb-0"
    >
      <h3 class="text-xl font-semibold mb-2">
        {{ experience.company }}
      </h3>
      <p><strong>Duration:</strong> {{ experience.duration }}</p>
      <p v-if="experience.role">
        <strong>Role:</strong> {{ experience.role }}
      </p>
      <p v-if="experience.project">
        <strong>Project:</strong> {{ experience.project }}
      </p>
      <p v-if="experience.technologies">
        <strong>Core Technologies: </strong>
        <span>{{ experience.technologies.join(", ") }}</span>
      </p>
      <h4 class="font-bold">Responsibilities/Achievements:</h4>
      <ul class="list-disc pl-5">
        <li
            v-for="(task, idx) in experience.responsibilities"
            :key="idx"
        >
          {{ task }}
        </li>
      </ul>
    </article>
  </LineItem>
</template>
