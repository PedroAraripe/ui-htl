<template>
  <l-map
    ref="map"
    v-model:zoom="zoom"
    :use-global-leaflet="false"
    :center="[-3.799803, -38.500067]"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
  </l-map>
</template>

<script lang="ts">
export default {
  data() {
    return {
      zoom: 16,
    };
  },
};
</script>

<style></style>