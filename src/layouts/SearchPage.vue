<template>
  <div class="bg-w-1">
    <div class="px-6 py-2">
      <slot name="aside" />
    </div>

    <div class="px-6 py-2">
      <slot name="nav-bottom-mobile" />
    </div>

    <hr class="bg-g-1 py-0.3">

    <main>
      <slot name="main" />
    </main>
  </div>
</template>