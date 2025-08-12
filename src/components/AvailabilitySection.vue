<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { availabilityData } = defineProps({
  availabilityData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem>
    <template #icon>
      <i class="i-tabler-map-pin text-3xl" />
    </template>
    <template #heading>Availability</template>
    <ul>
      <li>
        <strong>Availability to Start:</strong>
        {{ availabilityData.start }}
      </li>
      <li>
        <strong>Availability to Travel:</strong>
        {{ availabilityData.travel }}
      </li>
      <li>
        <strong>Availability to Relocate:</strong>
        {{ availabilityData.relocate }}
      </li>
    </ul>
  </LineItem>
</template>
