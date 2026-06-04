<script setup>
const slug = useRoute().params.name;
const { data: post } = await useAsyncData(`policies-${slug}`, () => {
    return queryCollection("policies").path(`/policies/${slug}`).first();
});
</script>

<template>
    <div v-if="post">
        <ContentRenderer :value="post" class="prose-lg font-prompt" />
    </div>

    <div v-else>
        <p>กำลังโหลด หรือ ไม่พบเนื้อหานโยบายนี้...</p>
    </div>
</template>
