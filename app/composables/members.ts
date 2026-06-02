export type UseMembersProps = {
  query: {
    nickname?: string;
    tag?: "หัวหน้าพรรค" | "รองหัวหน้าพรรค" | "สมาชิก";
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
    grade: number;
    room: number;
    custom: {
      [key: string]: string;
    };
  };
};

export function useMembers(props?: UseMembersProps) {
  let academicMembers: Member[] = [
    {
      imageUrl: "/member-profiles/gorn.png",
      name: "อรัญธนชัย แตงเส็ง",
      tag: "รองหัวหน้าพรรค",
      quote:
        "ชื่อกอร์น เพราะแม่เบียว HxH ไม่ได้ชื่อคิรัวร์ แต่ถ้าเรียกว่าคิรัวร์จะดีใจมาก",
      info: {
        nickname: "กอร์น",
        birthday: "20/05/2010",
        hobby: "เขียนโปรแกรมได้",
        grade: 4,
        room: 2,
        custom: {
          วิชาที่ถนัด: "ศิลปะ",
        },
      },
    },
    {
      imageUrl: "",
      name: "เมธาพร มาพวะ",
      tag: "สมาชิก",
      quote: "ไม่สะอื้นสดชื่นด้วยซ้ำ",
      info: {
        nickname: "เอิน",
        birthday: "07/12/2010",
        hobby: "วาดรูป",
        grade: 4,
        room: 1,
        custom: {
          วิชาที่ถนัด: "ศิลปะ",
        },
      },
    },
    {
      imageUrl: "",
      name: "จันทิมา โจไธสงค์",
      tag: "สมาชิก",
      quote: "ถึงพี่จะไม่ใช่ซีเคร็ทแต่พี่ก็อยากเป็นสภาที่เด็ดปี69",
      info: {
        nickname: "จ๋อมแจ๋ม",
        birthday: "10/01/2011",
        hobby:
          "พูดสุนทรพจน์ เล่นโชว์สง่างามคัลเลอร์การ์ด ไรเฟิล เล่นกีฬาหลากหลายชนิด",
        grade: 4,
        room: 5,
        custom: {
          วิชาที่ถนัด: "เคมีและภาษาอังกฤษ",
        },
      },
    },
  ];
  if (props?.query.tag) {
    academicMembers = academicMembers.filter(
      (member) => member.tag === props.query.tag,
    );
  }

  let serviceMembers: Member[] = [
    {
      imageUrl: "/member-profiles/friendly.png",
      name: "กวิสรา เผ่ามงคล",
      tag: "รองหัวหน้าพรรค",
      quote: "เฟรนลี่ชื่อนี้ไม่มีเสีย",
      info: {
        nickname: "เฟรนลี่",
        birthday: "09/02/2010",
        hobby:
          "เล่นกีฬาได้ทุกประเภทเข้ากับคนอื่นได้ง่าย ทำได้ทุกกิจกรรม ทำได้หลายๆอย่างเช่นเต้น รำหรือจับผ้า",
        grade: 4,
        room: 3,
        custom: {
          วิชาที่ถนัด: "คณิตศาสตร์และพละศึกษา",
        },
      },
    },
    {
      imageUrl: "",
      name: "กรณภัทร โชคเหมาะ",
      tag: "สมาชิก",
      quote: "หน้าเหวี่ยง อย่าทิ้งเค้า",
      info: {
        nickname: "ไตตั้น",
        birthday: "08/05/2011",
        hobby: "เล่นกีฬา",
        grade: 4,
        room: 3,
        custom: {
          วิชาที่ถนัด: "คณิตศาสตร์",
        },
      },
    },
    {
      imageUrl: "",
      name: "สุจิราภรณ์ งามกระบวน",
      tag: "สมาชิก",
      quote: "ทุกปัญหามีทางออก ถ้าเราไม่หยุดพัฒนา",
      info: {
        nickname: "เวียร์",
        birthday: "19/03/2010",
        hobby: "เล่นกีฬาได้ ทำงานร่วมกับคนอื่นเก่ง",
        grade: 5,
        room: 2,
        custom: {
          เคมี: "ไม่ใช่คนที่เก่งแต่พร้อมที่จะพัฒนา",
        },
      },
    },
    {
      imageUrl: "",
      name: "ทรัพย์สิริ มาฆะเซ็น",
      tag: "สมาชิก",
      quote: "กลางวันนั่งเก็บเกรด พอพักเบรคเปิดสเตจส่วนตัว",
      info: {
        nickname: "ต้นหอม",
        birthday: "16/12/2010",
        hobby: "เต้นและรำ",
        grade: 4,
        room: 5,
        custom: {
          วิชาที่ถนัด: "วิทยาศาสตร์และคณิตศาสตร์",
        },
      },
    },
  ];
  if (props?.query.tag) {
    serviceMembers = serviceMembers.filter(
      (member) => member.tag === props.query.tag,
    );
  }

  let studentActivityMembers: Member[] = [
    {
      imageUrl: "/member-profiles/o-new.png",
      name: "ณัฐณิชา วิลัยเกษ",
      tag: "รองหัวหน้าพรรค",
      quote: "คนทำไม่ท้อ คนรอไม่ทิ้ง",
      info: {
        nickname: "โอนิว",
        birthday: "02/06/2011",
        hobby: "เล่นดนตรีได้นิดหน่อย",
        grade: 4,
        room: 6,
        custom: {
          วิชาที่ถนัด: "ภาษาจีน",
        },
      },
    },
    {
      imageUrl: "",
      name: "ณัฐชยา จันทร์คำ",
      tag: "สมาชิก",
      quote: "ดอกไม้ไม่ได้บานพร้อมกัน แต่ทุกดอกมีฤดูของตัวเอง",
      info: {
        nickname: "แพรวา",
        birthday: "02/06/2011",
        hobby: "รำก็ได้กีฬาก็ดี",
        grade: 4,
        room: 11,
        custom: {
          วิชาที่ถนัด: "ภาษาไทย และพละศึกษา",
        },
      },
    },
    {
      imageUrl: "",
      name: "ไตรภูมิ อาริยะ",
      tag: "สมาชิก",
      quote: "มะนาวก็เปรี้ยวไม่เท่าเรา",
      info: {
        nickname: "เครป",
        birthday: "30/04/2011",
        hobby: "รำก็ได้กีฬาก็ดี",
        grade: 4,
        room: 2,
        custom: {
          ประวัติศาสตร์: "ได้รู้เรื่องที่เกิดขึ้นมาก่อนเเล้ว",
        },
      },
    },
  ];
  if (props?.query.tag) {
    studentActivityMembers = studentActivityMembers.filter(
      (member) => member.tag === props.query.tag,
    );
  }

  let studentRuleMembers: Member[] = [
    {
      imageUrl: "/member-profiles/hin.png",
      name: "ธีระพันธ์ พากเพียร",
      tag: "รองหัวหน้าพรรค",
      quote: "พูดแล้วไม่ทำ ไม่ใช่เรา",
      info: {
        nickname: "ก้อนหิน",
        birthday: "28/08/2010",
        hobby: "ทำได้ทุกอย่าง",
        grade: 4,
        room: 5,
        custom: {},
      },
    },
    {
      imageUrl: "",
      name: "กชพรรณ สุราษฎร์",
      tag: "สมาชิก",
      quote: "คนโหดประจำทุกปี",
      info: {
        nickname: "บิ๊กบีม",
        birthday: "24/02/2011",
        hobby: "คุยสนุก",
        grade: 4,
        room: 6,
        custom: {
          วิชาที่ถนัด: "พละ",
        },
      },
    },
    {
      imageUrl: "",
      name: "กนกพร ก้อนทอง",
      tag: "สมาชิก",
      quote: "ชื่อโมเพื่อนเรียกแตงโมเพราะว่าน่ารัก",
      info: {
        nickname: "แตงโม",
        birthday: "02/04/2010",
        hobby: "แต่งนิยาย",
        grade: 4,
        room: 6,
        custom: {
          วิชาที่ถนัด: "อังกฤษ",
        },
      },
    },
    {
      imageUrl: "",
      name: "พลอยไพริน หินประกอบ",
      tag: "สมาชิก",
      quote: "เรียกหยกก็ได้ เรียกพลอยก็ดี 🙌🏻",
      info: {
        nickname: "หยก",
        birthday: "23/05/2010",
        hobby: "วาดรูป ระบายสี เล่นกีฬา",
        grade: 4,
        room: 7,
        custom: {
          วิชาที่ถนัด: "ไทย, ศิลปะ และพละ",
        },
      },
    },
    {
      imageUrl: "",
      name: "ธัญญ่า ผ่านจังหา",
      tag: "สมาชิก",
      quote: "ไม่ต้องเก่งที่สุด แค่ไม่หยุดก็พอ",
      info: {
        nickname: "ธัญญ่า",
        birthday: "04/12/2010",
        hobby: "เล่นกีฬาได้หลากหลาย คณิตคิดเร็ว(นิดหน่อย)",
        grade: 4,
        room: 7,
        custom: {
          วิชาที่ถนัด: "คณิตศาสตร์",
        },
      },
    },
  ];
  if (props?.query.tag) {
    studentRuleMembers = studentRuleMembers.filter(
      (member) => member.tag === props.query.tag,
    );
  }

  const members = ref<{
    president: Member;
    department: {
      academic: Member[];
      service: Member[];
      studentActivity: Member[];
      studentRule: Member[];
    };
  }>({
    president: {
      imageUrl: "/member-profiles/efs.png",
      name: "พัชรณัฏฐ์ สีหาวัตร",
      tag: "หัวหน้าพรรค",
      quote: "ปัญหาทำให้ฉันเติบโต จนจำเวอร์ชั่นเดิมไม่ได้",
      info: {
        nickname: "เอฟ",
        birthday: "28/02/2011",
        hobby: "เล่นกีฬาเก่ง",
        grade: 4,
        room: 2,
        custom: {
          วิชาที่ถนัด: "วิทยาศาสตร์",
        },
      },
    },
    department: {
      academic: academicMembers,
      service: serviceMembers,
      studentActivity: studentActivityMembers,
      studentRule: studentRuleMembers,
    },
  });

  return members;
}
