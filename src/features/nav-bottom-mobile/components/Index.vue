<template>
    <v-container>
      <v-bottom-navigation>
        <v-btn
          v-for="route of secondaryRoutes"
          :key="route.name"
          :value="route.name"
          class="nav-item"
          :class="{'v-btn--active' : route.isCurrent}"
          @click="router.push({name : route.name})"
        >
          <!-- <v-icon>{{ route.meta.icon }}</v-icon> -->
    
          <span>{{ route.meta.title }}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
</template>

<script lang="ts" setup>
import { getSecondaryRoutes } from "@/composables/navRoutes";
import { useRouter } from "vue-router";

const router = useRouter();

const secondaryRoutes = getSecondaryRoutes();
</script>

<style lang="scss" scoped>
@import "../../../assets/style/colorsVariables.scss";

.nav-item.v-btn--active {
  color: $theme-red-1;
  font-weight: 600;

  & > :first-child {
    opacity: 0 !important;
  }
}
</style>