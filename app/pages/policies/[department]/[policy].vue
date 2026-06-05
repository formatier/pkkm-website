<script setup lang="ts">
definePageMeta({
    layout: "promote",
});

const { department, policy } = useRoute().params;

const { data: post } = await useAsyncData(
    `policies-${department}-${policy}`,
    () => {
        return queryCollection("policies")
            .path(`/policies/${department}/${policy}`)
            .first();
    },
);
</script>

<template>
    <div class="vision-padding-x font-prompt">
        <div class="lg:px-42 xl:px-67 pb-18">
            <NuxtLink
                class="flex gap-1 items-center hover:underline my-6"
                to="/policies"
            >
                <Icon name="ph:arrow-left"></Icon>
                <span>กลับไปหน้านโยบายทั้งหมด</span>
            </NuxtLink>
            <h1
                class="xl:text-6xl xl:leading-18 text-5xl leading-16 font-semibold break-keep whitespace-normal mb-6"
            >
                {{ post?.title }}
            </h1>
            <div v-if="post">
                <ContentRenderer :value="post" class="prose lg:prose-xl" />
            </div>

            <div v-else>
                <p>กำลังโหลด หรือ ไม่พบเนื้อหานโยบายนี้...</p>
            </div>
        </div>
    </div>
</template>
