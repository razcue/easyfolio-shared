<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { portfolioData } = defineProps({
  portfolioData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem v-if="portfolioData">
    <template #icon>
      <i class="i-tabler-briefcase text-3xl" />
    </template>
    <template #heading>Portfolio</template>
    <div class="flex flex-wrap gap-2">
      <a
          v-for="(item, index) in portfolioData"
          :key="index"
          :href="item.url"
          target="_blank"
          rel="noopener"
          class="no-underline transition duration-400 hover:text-[var(--color-link-hover)] border-2 p-2 rounded-md flex gap-2 items-center"
      >
        <i
            v-show="item.icon"
            v-cloak
            :class="item.icon + ' text-3xl'"
        />
        <span class="text-base">{{ item.name }}</span>
      </a>
    </div>
  </LineItem>
</template>
