<template>
    <div>
        <div
            class="bg-white rounded-t-xl flex flex-col-reverse lg:grid lg:grid-cols-[15rem_1fr]"
        >
            <slot></slot>
        </div>
        <div class="bg-blue-zodiac-900 rounded-b-xl p-6">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
