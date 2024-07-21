<template>
    <v-bottom-navigation :class="{'hide-bottom-nav' : scrollHistory.isScrollingBottom}">
      <v-btn
        v-for="route of secondaryRoutes"
        :key="route.name"
        :value="route.name"
        class="nav-item"
        :class="{'v-btn--active' : route.isCurrent}"
        @click="router.push({name : route.name})"
      >
        <span>{{ route.meta.title }}</span>
      </v-btn>
    </v-bottom-navigation>
</template>

<script lang="ts" setup>
import { getSecondaryRoutes } from "@/composables/navRoutes";
import { useRouter } from "vue-router";

import {
  scrollHistory,
  addEventListenerScrollBottom,
  removeEventListenerScrollBottomUnmount,
} from "../composables/isScrollingBottom";

addEventListenerScrollBottom();
removeEventListenerScrollBottomUnmount();

const router = useRouter();
const secondaryRoutes = getSecondaryRoutes();
</script>

<style lang="scss" scoped>
@import "../../../assets/style/themes.scss";

.nav-item.v-btn--active {
  color: $theme-red-1;
  font-weight: 600;

  & > :first-child {
    opacity: 0 !important;
  }
}

.hide-bottom-nav {
  height: 0px !important;
  transition: height 0.5s;
}
</style>