<script setup lang="ts">
const isMobileNavOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div
        class="flex justify-between vision-padding-x py-4 sticky top-0 items-center font-kanit font-light bg-white transition z-1000"
        :class="isScrolled ? 'shadow' : ''"
    >
        <ul class="flex gap-3 items-center">
            <button
                @click="() => (isMobileNavOpen = !isMobileNavOpen)"
                class="lg:hidden size-6"
            >
                <Icon name="ph:list" class="size-6"></Icon>
            </button>
            <li>
                <slot name="icon"></slot>
            </li>
            <div class="lg:flex gap-1 hidden">
                <slot></slot>
            </div>
        </ul>

        <ul class="flex gap-4 items-center">
            <slot name="external-link"></slot>
        </ul>
    </div>

    <div
        class="lg:hidden flex flex-col gap-1 fixed top-0 w-full p-3 z-10 h-dvh bg-white font-kanit font-light"
        v-if="isMobileNavOpen"
    >
        <div class="flex justify-between px-4 py-3">
            <button @click="() => (isMobileNavOpen = false)" class="size-6">
                <Icon name="ph:x" class="size-6"></Icon>
            </button>
            <div></div>
        </div>
        <div class="flex flex-col gap-1">
            <slot></slot>
        </div>
    </div>
</template>
