<template>
    <v-container>
      <v-bottom-navigation>
        <v-btn
          v-for="route of secondaryRoutes"
          :key="route.id"
          :value="route.name"
          class="nav-item"
        >
          <!-- <v-icon>{{ route.meta.icon }}</v-icon> -->
    
          <span>{{ route.meta.title }}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
</template>

<script lang="ts" setup>
import { secondaryRoutes } from "@/composables/navRoutes";
</script>

<style lang="scss" scoped>
@import "../../../assets/style/colorsVariables.scss";

.nav-item.v-btn--active {
  color: $theme-red-1;
  font-weight: 600;
}
</style>