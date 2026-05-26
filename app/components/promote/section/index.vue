<script setup lang="ts">
const props = withDefaults(defineProps<{ bgColor?: "zodiac" | "white" }>(), {
    bgColor: "white",
});
</script>

<template>
    <div
        class="vision-padding-x lg:py-16 py-8 text-white"
        :class="props.bgColor == 'zodiac' ? 'bg-blue-zodiac-950' : 'bg-white'"
    >
        <slot></slot>
    </div>
</template>
