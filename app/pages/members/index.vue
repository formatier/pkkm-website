<script lang="ts" setup>
import Section from "~/components/promote/section/member/main-card/info/profile/info/section.vue";

definePageMeta({
    layout: "promote",
});

let members = useMembers();
</script>

<template>
    <div class="font-prompt">
        <Hero>
            <HeroHeader>รายชื่อสมาชิก</HeroHeader>
            <HeroParagraph>
                พรรคฟ้าขาวก้าวใหม่มาพร้อมกับสมาชิกน้องใหม่ไฟแรงที่เข้าถึงง่ายและพร้อมทำงานในสภา
            </HeroParagraph>
        </Hero>

        <AppSection bgColor="zodiac">
            <AppSectionHeader id="student-activity">
                สมาชิกฝ่ายกิจกรรม
            </AppSectionHeader>
            <div class="flex flex-col gap-4">
                <PromoteSectionMemberMainCard
                    v-for="member in members.department.studentActivity"
                    :key="member.name"
                >
                    <PromoteSectionMemberMainCardImage
                        :src="member.imageUrl"
                    ></PromoteSectionMemberMainCardImage>
                    <PromoteSectionMemberMainCardInfo>
                        <PromoteSectionMemberMainCardInfoTag>
                            {{ member.tag }}
                        </PromoteSectionMemberMainCardInfoTag>
                        <PromoteSectionMemberMainCardInfoName>
                            {{ member.name }}
                        </PromoteSectionMemberMainCardInfoName>
                        <PromoteSectionMemberMainCardInfoQuote>
                            {{ member.quote }}
                        </PromoteSectionMemberMainCardInfoQuote>

                        <PromoteSectionMemberMainCardInfoProfile>
                            <PromoteSectionMemberMainCardInfoProfileInfoSection>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ชื่อเล่น
                                    <template #text>
                                        {{ member.info.nickname }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        เกิด
                                        <template #text>
                                            {{ member.info.birthday }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        อายุ
                                        <template #text> 15 </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ความสามารถพิเศษ
                                    <template #text>
                                        {{ member.info.hobby }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ชั้น
                                        <template #text>
                                            ม.{{
                                                member.info.grade +
                                                "/" +
                                                member.info.room
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ห้องเรียน
                                        <template #text>
                                            {{
                                                getStudentProgram(
                                                    member.info.room,
                                                )
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom
                                    v-for="(value, key) in member.info.custom"
                                    :key="key"
                                >
                                    {{ key }}
                                    <template #text>
                                        {{ value }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            </PromoteSectionMemberMainCardInfoProfileInfoSection>
                        </PromoteSectionMemberMainCardInfoProfile>
                    </PromoteSectionMemberMainCardInfo>
                </PromoteSectionMemberMainCard>
            </div>
        </AppSection>

        <AppSection bgColor="zodiac">
            <AppSectionHeader id="service"> สมาชิกฝ่ายบริการ </AppSectionHeader>
            <div class="flex flex-col gap-4">
                <PromoteSectionMemberMainCard
                    v-for="member in members.department.service"
                    :key="member.name"
                >
                    <PromoteSectionMemberMainCardImage
                        :src="member.imageUrl"
                    ></PromoteSectionMemberMainCardImage>
                    <PromoteSectionMemberMainCardInfo>
                        <PromoteSectionMemberMainCardInfoTag>
                            {{ member.tag }}
                        </PromoteSectionMemberMainCardInfoTag>
                        <PromoteSectionMemberMainCardInfoName>
                            {{ member.name }}
                        </PromoteSectionMemberMainCardInfoName>
                        <PromoteSectionMemberMainCardInfoQuote>
                            {{ member.quote }}
                        </PromoteSectionMemberMainCardInfoQuote>

                        <PromoteSectionMemberMainCardInfoProfile>
                            <PromoteSectionMemberMainCardInfoProfileInfoSection>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ชื่อเล่น
                                    <template #text>
                                        {{ member.info.nickname }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        เกิด
                                        <template #text>
                                            {{ member.info.birthday }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        อายุ
                                        <template #text> 15 </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ความสามารถพิเศษ
                                    <template #text>
                                        {{ member.info.hobby }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ชั้น
                                        <template #text>
                                            ม.{{
                                                member.info.grade +
                                                "/" +
                                                member.info.room
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ห้องเรียน
                                        <template #text>
                                            {{
                                                getStudentProgram(
                                                    member.info.room,
                                                )
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom
                                    v-for="(value, key) in member.info.custom"
                                    :key="key"
                                >
                                    {{ key }}
                                    <template #text>
                                        {{ value }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            </PromoteSectionMemberMainCardInfoProfileInfoSection>
                        </PromoteSectionMemberMainCardInfoProfile>
                    </PromoteSectionMemberMainCardInfo>
                </PromoteSectionMemberMainCard>
            </div>
        </AppSection>

        <AppSection bgColor="zodiac">
            <AppSectionHeader id="academic">
                สมาชิกฝ่ายวิชาการ
            </AppSectionHeader>
            <div class="flex flex-col gap-4">
                <PromoteSectionMemberMainCard
                    v-for="member in members.department.academic"
                    :key="member.name"
                >
                    <PromoteSectionMemberMainCardImage
                        :src="member.imageUrl"
                    ></PromoteSectionMemberMainCardImage>
                    <PromoteSectionMemberMainCardInfo>
                        <PromoteSectionMemberMainCardInfoTag>
                            {{ member.tag }}
                        </PromoteSectionMemberMainCardInfoTag>
                        <PromoteSectionMemberMainCardInfoName>
                            {{ member.name }}
                        </PromoteSectionMemberMainCardInfoName>
                        <PromoteSectionMemberMainCardInfoQuote>
                            {{ member.quote }}
                        </PromoteSectionMemberMainCardInfoQuote>

                        <PromoteSectionMemberMainCardInfoProfile>
                            <PromoteSectionMemberMainCardInfoProfileInfoSection>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ชื่อเล่น
                                    <template #text>
                                        {{ member.info.nickname }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        เกิด
                                        <template #text>
                                            {{ member.info.birthday }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        อายุ
                                        <template #text> 15 </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ความสามารถพิเศษ
                                    <template #text>
                                        {{ member.info.hobby }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ชั้น
                                        <template #text>
                                            ม.{{
                                                member.info.grade +
                                                "/" +
                                                member.info.room
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ห้องเรียน
                                        <template #text>
                                            {{
                                                getStudentProgram(
                                                    member.info.room,
                                                )
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom
                                    v-for="(value, key) in member.info.custom"
                                    :key="key"
                                >
                                    {{ key }}
                                    <template #text>
                                        {{ value }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            </PromoteSectionMemberMainCardInfoProfileInfoSection>
                        </PromoteSectionMemberMainCardInfoProfile>
                    </PromoteSectionMemberMainCardInfo>
                </PromoteSectionMemberMainCard>
            </div>
        </AppSection>

        <AppSection bgColor="zodiac">
            <AppSectionHeader id="student-rule">
                สมาชิกฝ่ายระเบียบ
            </AppSectionHeader>
            <div class="flex flex-col gap-4">
                <PromoteSectionMemberMainCard
                    v-for="member in members.department.studentRule"
                    :key="member.name"
                >
                    <PromoteSectionMemberMainCardImage
                        :src="member.imageUrl"
                    ></PromoteSectionMemberMainCardImage>
                    <PromoteSectionMemberMainCardInfo>
                        <PromoteSectionMemberMainCardInfoTag>
                            {{ member.tag }}
                        </PromoteSectionMemberMainCardInfoTag>
                        <PromoteSectionMemberMainCardInfoName>
                            {{ member.name }}
                        </PromoteSectionMemberMainCardInfoName>
                        <PromoteSectionMemberMainCardInfoQuote>
                            {{ member.quote }}
                        </PromoteSectionMemberMainCardInfoQuote>

                        <PromoteSectionMemberMainCardInfoProfile>
                            <PromoteSectionMemberMainCardInfoProfileInfoSection>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ชื่อเล่น
                                    <template #text>
                                        {{ member.info.nickname }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        เกิด
                                        <template #text>
                                            {{ member.info.birthday }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        อายุ
                                        <template #text> 15 </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ความสามารถพิเศษ
                                    <template #text>
                                        {{ member.info.hobby }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ชั้น
                                        <template #text>
                                            ม.{{
                                                member.info.grade +
                                                "/" +
                                                member.info.room
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ห้องเรียน
                                        <template #text>
                                            {{
                                                getStudentProgram(
                                                    member.info.room,
                                                )
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom
                                    v-for="(value, key) in member.info.custom"
                                    :key="key"
                                >
                                    {{ key }}
                                    <template #text>
                                        {{ value }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            </PromoteSectionMemberMainCardInfoProfileInfoSection>
                        </PromoteSectionMemberMainCardInfoProfile>
                    </PromoteSectionMemberMainCardInfo>
                </PromoteSectionMemberMainCard>
            </div>
        </AppSection>
    </div>
</template>
