<template>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout v-if="false">
        <NuxtPage :transition="{ name: 'page', mode: 'out-in' }"></NuxtPage>
    </NuxtLayout>
    <div class="flex flex-col w-full h-dvh items-center justify-center px-24">
        <div class="font-prompt prose-xl">
            <h1>เว็บไซต์ปิดตัวลงชั่วคราว</h1>
            <p class="max-w-lg">
                ด้วยเหตุผลทางการเลือกตั้งสภานักเรียนในวันที่ 15 มิถุนายน 2569
                ได้ระบุเอาไว้ว่า ห้ามหาเสียงในวันเลือกตั้ง
                ทางเราจึงปิดตัวเว็บไซต์ลงชั่วคราว
            </p>
            <p class="max-w-lg">
                ทั้งนี้
                ยังสามารถเข้าถึงเว็บไซต์ได้โดยการคัดลอกโปรเจกต์หรือซอร์สโค้ดและนำมาเปิดใช้งานในสภาพแวดล้อมเครื่อข่ายท้องถิ่น
            </p>
        </div>
    </div>
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
