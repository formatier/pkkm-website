<template>
    <PromoteNav>
        <template #icon>
            <NuxtLink to="/">
                <p class="text-2xl">พรรครวมใจฟ้าขาว</p>
            </NuxtLink>
        </template>

        <template #default>
            <PromoteNavItem to="/" title="">นโยบาย</PromoteNavItem>
            <PromoteNavItem to="/" title="">สมาชิก</PromoteNavItem>
            <PromoteNavItem to="/" title="">จุดมุ่งหมาย</PromoteNavItem>
        </template>

        <template #external-link>
            <NuxtLink to="/">
                <Icon name="ph:instagram-logo" class="size-6"></Icon>
            </NuxtLink>
            <NuxtLink to="/">
                <Icon name="ph:tiktok-logo" class="size-6"></Icon>
            </NuxtLink>
            <NuxtLink to="/">
                <Icon name="ph:facebook-logo" class="size-6"></Icon>
            </NuxtLink>
        </template>
    </PromoteNav>

    <PromoteHero></PromoteHero>
</template>
