export function convertMinutesToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60); // Số giờ là phần nguyên của phân số
    const minutes = totalMinutes % 60; // Số phút là phần dư
    return `${hours}h ${minutes}phut`;
  }