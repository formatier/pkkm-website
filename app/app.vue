<template>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <div
        class="flex py-4 bg-amber-200 font-prompt items-center border-b-2 border-amber-300 justify-center flex-col"
    >
        <p class="text-blue-zodiac-950">
            เว็บไซต์นี้ถูกเก็บถาวร<br class="md:hidden"/>ตั้งแต่วันที่ 16 มิถุนายน 2569
        </p>
        <p class="text-blue-zodiac-950">
            © 2026 Formatier FPNC <br/> Licensed under the Apache License 2.0
        </p>
    </div>
    <NuxtLayout>
        <NuxtPage :transition="{ name: 'page', mode: 'out-in' }"></NuxtPage>
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
    will-change: opacity;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.1s ease,
        transform 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
