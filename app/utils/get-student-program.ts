export default function(room: number): "ปกติ" | "IEP" | "SMP" | "วิทยาศาสตร์พลังสิบ" | "ศิลป์คำนวน" {
    if (room == 1) {
        return "SMP"
    } else if (room == 2) {
        return "IEP"
    } else if (room == 5) {
        return "วิทยาศาสตร์พลังสิบ"
    } else if (room == 11) {
        return "ศิลป์คำนวน"
    } else {
        return "ปกติ"
    }
}