<template>
  <div class="item">
    <i
        class="flex items-center justify-center w-8 h-8 text-[var(--color-text)] lg:absolute lg:top-[var(--icon-top-position)] lg:left-[-26px] lg:w-12 lg:h-12 lg:border lg:border-[var(--color-border)] lg:bg-[var(--color-bg-soft)] lg:rounded-md"
    >
      <slot name="icon"></slot>
    </i>
    <div class="flex-1 !ml-2">
      <h2 class="text-2xl font-bold mb-2">
        <slot name="heading"></slot>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .item:before {
    content: " ";
    border-left: 2px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 2px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
