<script lang="ts" setup>
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <li
        class="hover:bg-blue-zodiac-100 transition lg:px-3 lg:py-1 lg:rounded-4xl duration-100 px-5 py-3"
    >
        <NuxtLink :to="props.to"><slot /></NuxtLink>
    </li>
</template>
