<script setup lang="ts">
import LineItem from "./LineItem.vue";

const { interestData } = defineProps({
  interestData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <LineItem v-if="interestData.lenght">
    <template #icon>
      <i class="i-tabler-heart text-3xl" />
    </template>
    <template #heading>Interests</template>
    <ul class="flex flex-wrap gap-x-8 gap-y-4">
      <li
          v-if="interestData.includes('coding')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-braces text-3xl m-0" />
        <span class="uppercase font-bold">Coding</span>
      </li>
      <li
          v-if="interestData.includes('design')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-pencil text-3xl m-0" />
        <span class="uppercase font-bold">Design</span>
      </li>
      <li
          v-if="interestData.includes('travel')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-plane text-3xl m-0" />
        <span class="uppercase font-bold">Travel</span>
      </li>
      <li
          v-if="interestData.includes('gaming')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-device-gamepad-2 text-3xl m-0" />
        <span class="uppercase font-bold">Gaming</span>
      </li>
      <li
          v-if="interestData.includes('music')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-music text-3xl m-0" />
        <span class="uppercase font-bold">Music</span>
      </li>
      <li
          v-if="interestData.includes('reading')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-book text-3xl m-0" />
        <span class="uppercase font-bold">Reading</span>
      </li>
      <li
          v-if="interestData.includes('sports')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-ball-football text-3xl m-0" />
        <span class="uppercase font-bold">Sports</span>
      </li>
      <li
          v-if="interestData.includes('photography')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-camera text-3xl m-0" />
        <span class="uppercase font-bold">Photography</span>
      </li>
      <li
          v-if="interestData.includes('cooking')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-bowl-spoon text-3xl m-0" />
        <span class="uppercase font-bold">Cooking</span>
      </li>
      <li
          v-if="interestData.includes('fitness')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-run text-3xl m-0" />
        <span class="uppercase font-bold">Fitness</span>
      </li>
      <li
          v-if="interestData.includes('nature')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-tree text-3xl m-0" />
        <span class="uppercase font-bold">Nature</span>
      </li>
      <li
          v-if="interestData.includes('technology')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-cpu text-3xl m-0" />
        <span class="uppercase font-bold">Technology</span>
      </li>
      <li
          v-if="interestData.includes('health')"
          class="flex flex-col items-center"
      >
        <i class="i-tabler-heartbeat text-3xl m-0" />
        <span class="uppercase font-bold">Health</span>
      </li>
    </ul>
  </LineItem>
</template>
