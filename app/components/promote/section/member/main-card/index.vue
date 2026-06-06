<template>
    <div
        class="shadow-md bg-white rounded-xl flex flex-col-reverse lg:grid lg:grid-cols-[30rem_1fr] relative overflow-x-hidden z-10 md:pb-100 pb-55 lg:pb-0 hover:[&>#image]:z-2000"
    >
        <div
            class="hidden lg:flex items-center gap-3 absolute top-5 left-5 font-prompt opacity-50 z-2001"
        >
            <Icon name="logos:logo" class="size-14" />
            <p class="text-2xl text-blue-zodiac-950">ฟ้าขาวก้าวใหม่</p>
        </div>
        <slot></slot>
    </div>
</template>
