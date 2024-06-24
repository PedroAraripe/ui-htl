<template>
  <div class="bg-w-1">
    <div class="px-4 py-2">
      <slot name="aside" />
    </div>

    <hr class="bg-g-1 py-0.3">

    <main>
      <slot name="main" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
</style>