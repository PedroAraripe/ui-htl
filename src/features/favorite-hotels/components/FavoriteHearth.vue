<template>
    <button 
        class="wrapper-icon-hearth flex justify-space-between align-center"
        @click="favoriClickteHandler"
        :class="{'is-favorite': isFavorite}"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: var(--linaria-theme_palette-icon-primary-inverse); stroke-width: 2; overflow: visible;"><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
    </button>
</template>

<script lang="ts" setup>
import { type PropType, type Ref, ref } from "vue";
import type { IHotelCardPreview } from '@/types/IHotelComponents';
import {
    saveFavoriteById,
    unsaveFavoriteById
 } from "@/api/favorites";

const props = defineProps({
    hotel: {
        type: Object as PropType<IHotelCardPreview>,
        required: true
    }
});

const isFavorite: Ref<Boolean> = ref(props.hotel.isFavorite); 

const favoriClickteHandler = async () => {
    try {
        if(isFavorite.value) {
            await unsaveFavoriteById(props.hotel);
            isFavorite.value = false;

        } else {
            await saveFavoriteById(props.hotel);
            isFavorite.value = true;
        }
    } catch(e) {
        console.error(e);
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/themes.scss";

.wrapper-icon-hearth {
    stroke: rgba(255, 255, 255, 0.527);
    stroke-width: 2;
    overflow: visible;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.055);
    padding: 0.2rem;

    &.is-favorite {
        svg {
            fill: $theme-red-3 !important;
        }
    }


    &,
    &:hover {
        transition: all 0.3s;
    }

    &:hover {
        scale: 1.2;
    }

    &:focus {
        color: red;
    }
}
</style>../../../api