<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { educationData } = defineProps({
  educationData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem v-if="educationData">
    <template #icon>
      <i class="i-tabler-certificate text-3xl" />
    </template>
    <template #heading>Education & Certification</template>
    <ul>
      <li v-for="(item, index) in educationData" :key="index">
        <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="no-underline transition duration-400 font-bold hover:text-[var(--color-link-hover)]"
        >
          {{ item.title }}:
        </a>
        <strong v-else>{{ item.title }}:</strong>
        {{ item.institution }} :
        {{ item.date }}
      </li>
    </ul>
  </LineItem>
</template>
