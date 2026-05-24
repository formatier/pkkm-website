<template>
    <PromoteNav>
        <template #icon>
            <NuxtLink to="/">
                <p class="text-2xl">พรรครวมใจฟ้าขาว</p>
            </NuxtLink>
        </template>

        <template #default>
            <PromoteNavItem to="/polcies" title="">นโยบาย</PromoteNavItem>
            <PromoteNavItem to="/members" title="">สมาชิก</PromoteNavItem>
            <PromoteNavItem to="/goals" title="">จุดมุ่งหมาย</PromoteNavItem>
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

    <PromoteHero>
        <PromoteHeroMessage>
            <PromoteHeroMessageHeader>
                เลือกคนพร้อมทำ<br />พวกเราพร้อมพัฒนา
            </PromoteHeroMessageHeader>

            <PromoteHeroMessageParagraph>
                เลือกรวมใจฟ้าขาวเข้าไปเป็นสภา เลือกอนาคตที่ดีกว่า
                พวกเรามาพร้อมกับนโยบายยุคใหม่ที่ตอบโจทย์ทุกคนและพร้อมลงมือทำให้เกิดขึ้นจริงเพื่อพัฒนาโรงเรียน
            </PromoteHeroMessageParagraph>

            <div class="flex gap-5 lg:justify-start justify-center">
                <NuxtLink class="btn btn-primary btn-lg" to="/policy">
                    นโยบาย
                </NuxtLink>
                <NuxtLink class="btn btn-outline btn-lg" to="/policy">
                    เสนอความคิดเห็น
                </NuxtLink>
            </div>
        </PromoteHeroMessage>

        <PromoteHeroGallery></PromoteHeroGallery>
    </PromoteHero>

    <PromoteMarquee>
        <p>เข้าคูหา กาเบอร์</p>
    </PromoteMarquee>

    <PromoteSection>
        <PromoteSectionHeader>สมาชิก</PromoteSectionHeader>
        <PromoteSectionMember>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
        </PromoteSectionMember>
    </PromoteSection>
</template>
