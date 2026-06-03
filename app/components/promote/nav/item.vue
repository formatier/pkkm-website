<script lang="ts" setup>
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <li class="flex">
        <NuxtLink :to="props.to" class="hover:bg-blue-zodiac-100 transition lg:px-3 lg:py-1 lg:rounded-4xl duration-100 px-5 py-3 w-full lg:w-auto"><slot /></NuxtLink>
    </li>
</template>
