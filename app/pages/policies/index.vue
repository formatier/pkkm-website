<script lang="ts" setup>
definePageMeta({
    layout: "promote",
});

const { data: academicPolicies } = await useAsyncData(
    "academic-policies",
    () => {
        return queryCollection("policies")
            .where("path", "LIKE", "/policies/academic/%")
            .all();
    },
);

const { data: servicePolicies } = await useAsyncData("service-policies", () => {
    return queryCollection("policies")
        .where("path", "LIKE", "/policies/service/%")
        .all();
});

const { data: studentActivityPolicies } = await useAsyncData(
    "student-activity-policies",
    () => {
        return queryCollection("policies")
            .where("path", "LIKE", "/policies/student-activity/%")
            .all();
    },
);

const { data: studentRulePolicies } = await useAsyncData(
    "student-rule-policies",
    () => {
        return queryCollection("policies")
            .where("path", "LIKE", "/policies/student-rule/%")
            .all();
    },
);
</script>

<template>
    <div class="font-prompt">
        <PolicyHero>
            <PolicyHeroHeader>นโยบายต่าง ๆ</PolicyHeroHeader>
            <PolicyHeroParagraph>
                พรรคฟ้าขาวก้าวใหม่
                มาพร้อมกับนโยบายที่ได้รับการรับรองมาแล้วว่าทำได้จริง
                และได้รับการกลั่นกรองมาแล้วจากทุกคน
            </PolicyHeroParagraph>
        </PolicyHero>

        <AppSection bgColor="zodiac">
            <AppSectionHeader>นโยบายฝ่ายกิจกรรม</AppSectionHeader>
            <PolicySectionCardContainer>
                <PolicySectionCard
                    v-for="policy in studentActivityPolicies"
                    :key="policy.id"
                >
                    <h1>{{ policy.title }}</h1>
                    <p>{{ policy.description }}...</p>
                </PolicySectionCard>
            </PolicySectionCardContainer>
        </AppSection>

        <AppSection bgColor="zodiac">
            <AppSectionHeader>นโยบายฝ่ายบริการ</AppSectionHeader>
            <PolicySectionCardContainer>
                <PolicySectionCard
                    v-for="policy in servicePolicies"
                    :key="policy.id"
                >
                    <h1>{{ policy.title }}</h1>
                    <p>{{ policy.description }}...</p>
                </PolicySectionCard>
            </PolicySectionCardContainer>
        </AppSection>

        <AppSection bgColor="zodiac">
            <AppSectionHeader>นโยบายฝ่ายวิชาการ</AppSectionHeader>
            <PolicySectionCardContainer>
                <PolicySectionCard
                    v-for="policy in academicPolicies"
                    :key="policy.id"
                >
                    <h1>{{ policy.title }}</h1>
                    <p>{{ policy.description }}...</p>
                </PolicySectionCard>
            </PolicySectionCardContainer>
        </AppSection>

        <AppSection bgColor="zodiac">
            <AppSectionHeader>นโยบายฝ่ายระเบียบ</AppSectionHeader>
            <PolicySectionCardContainer>
                <PolicySectionCard
                    v-for="policy in studentRulePolicies"
                    :key="policy.id"
                >
                    <h1>{{ policy.title }}</h1>
                    <p>{{ policy.description }}...</p>
                </PolicySectionCard>
            </PolicySectionCardContainer>
        </AppSection>
    </div>
</template>
