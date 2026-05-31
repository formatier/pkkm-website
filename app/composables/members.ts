export type UseMembersProps = {
  query: {
    nickname?: string;
  };
};

export type Member = {
  imageUrl: string;
  name: string;
  tag: "หัวหน้าพรรค" | "รองหัวหน้าพรรค" | "สมาชิก";
  quote?: string;
  info: {
    nickname: string;
    birthday: string;
    hobby: string;
    grade: string;
    program: string;
    custom: {
      [key: string]: string;
    };
  };
};

export function useMembers(props?: UseMembersProps) {
  const members = ref<{
    president: Member;
    members: Member[];
  }>({
    president: {
      imageUrl: "/member-profiles/efs.png",
      name: "พัชรณัฏฐ์ สีหาวัตร",
      tag: "หัวหน้าพรรค",
      quote: "ผมชื่อเอฟเพราะอะไรก็ไม่รู้",
      info: {
        nickname: "เอฟ",
        birthday: "28/02/2011",
        hobby: "เล่นกีฬาเก่ง",
        grade: "4/2",
        program: "IEP",
        custom: {
          วิชาที่ถนัด: "วิทยาศาสตร์",
        },
      },
    },
    members: [],
  });

  return members;
}
