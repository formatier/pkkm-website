<template>
    <div>
        <div
            class="bg-white rounded-t-xl flex flex-col-reverse lg:grid lg:grid-cols-[15rem_1fr] px-4 relative z-10 pb-50 sm:pb-30 lg:pb-0 overflow-hidden"
        >
            <div
                class="hidden lg:flex items-center gap-3 absolute top-5 left-5 font-prompt opacity-50"
            >
                <Icon name="logos:logo" class="size-14" />
            </div>
            <slot></slot>
        </div>
        <div class="bg-blue-zodiac-900 rounded-b-xl p-4">
            <slot name="link"></slot>
        </div>
    </div>
</template>
