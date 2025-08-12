<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { summaryData } = defineProps({
  summaryData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <LineItem>
    <template #icon>
      <i class="i-tabler-align-justified text-3xl" /> </template
    ><template #heading>Summary</template>
    <div class="flex flex-col gap-2">
      <div>
        <h3 class="text-lg font-semibold">Profile</h3>
        <ul class="list-disc list-inside">
          <li
              v-for="(item, index) in summaryData.profile"
              :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="summaryData.managementBackground">
        <h3 class="text-lg font-semibold">
          Management Background
        </h3>
        <ul class="list-disc list-inside">
          <li
              v-for="(item, index) in summaryData
									.managementBackground"
              :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="summaryData.technicalBackground">
        <h3 class="text-lg font-semibold">
          Technical Background
        </h3>
        <ul class="list-disc list-inside">
          <li
              v-for="(item, index) in summaryData
									.technicalBackground"
              :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </LineItem>
</template>
