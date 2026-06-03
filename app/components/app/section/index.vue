<script setup lang="ts">
const props = withDefaults(defineProps<{ bgColor?: "zodiac" | "white" }>(), {
    bgColor: "white",
});
</script>

<template>
    <div
        class="vision-padding-x lg:py-16 py-8"
        :class="
            props.bgColor == 'zodiac'
                ? 'bg-blue-zodiac-950 text-white'
                : 'bg-white text-blue-zodiac-950'
        "
    >
        <slot></slot>
    </div>
</template>
