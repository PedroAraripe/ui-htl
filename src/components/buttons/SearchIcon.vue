<template>
    <div class="wrapper-icon-search p-3 bg-pink-3">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            class="icon-search"
        >
                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/themes.scss";

.wrapper-icon-search {
    border-radius: 50%;

    svg {
        display: block;
        fill: none;
        height: 20px;
        width: 20px;
        stroke: currentcolor;
        stroke-width: 4;
        overflow: visible;
        color: white;
    }

}
</style>