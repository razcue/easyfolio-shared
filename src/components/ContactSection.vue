<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { contactData } = defineProps({
  contactData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem>
    <template #icon>
      <i class="i-tabler-at text-3xl" />
    </template>
    <template #heading>Contact Info</template>
    <ul class="space-y-1">
      <li>
        <strong>Email: </strong>
        <a
            :href="`mailto:${contactData.email}`"
            class="hover:text-[var(--color-link-hover)]"
        >
          {{ contactData.email }}
        </a>
      </li>
      <li v-if="contactData.phone">
        <strong>Phone: </strong>
        <a
            :href="`https://wa.me/${contactData.phone.replace('+', '')}`"
            target="_blank"
            rel="noopener"
            class="hover:text-[var(--color-link-hover)]"
        >
          {{ contactData.phone }}
        </a>
      </li>
      <li v-if="contactData.telegram">
        <strong>Telegram: </strong>
        <a
            :href="contactData.telegram"
            target="_blank"
            rel="noopener"
            class="hover:text-[var(--color-link-hover)]"
        >
          Telegram Profile
        </a>
      </li>
      <li v-if="contactData.linkedin">
        <strong>LinkedIn: </strong>
        <a
            :href="contactData.linkedin"
            target="_blank"
            rel="noopener"
            class="hover:text-[var(--color-link-hover)]"
        >
          LinkedIn Profile
        </a>
      </li>
    </ul>
  </LineItem>
</template>
