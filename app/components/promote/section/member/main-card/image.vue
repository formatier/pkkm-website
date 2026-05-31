<script lang="ts" setup>
const props = withDefaults(defineProps<{ src?: string }>(), {
    src: "/member-profiles/efs.png",
});
</script>

<template>
    <div
        class="w-full lg:h-full overflow-hidden absolute bottom-0 -right-20 lg:static lg:flex items-end -z-10"
    >
        <NuxtImg :src="props.src" class="aspect-square w-full"></NuxtImg>
    </div>
</template>
