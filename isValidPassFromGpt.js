function isValidPassword(password) {
    if (!password) return false;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[@#$%^&*!]/.test(password);

    return password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecial;
}

console.log(isValidPassword());

ในตัวอย่างนี้เราใช้ Regular Expressions (/[A-Z]/, /[a-z]/, /\d/, /[@#$%^&*!]/) ที่ทำหน้าที่ตรวจสอบว่า password มีตัวอักษรตัวใหญ่, ตัวอักษรตัวเล็ก, ตัวเลข, และอักขระพิเศษ ตามลำดับ ซึ่งทำให้โค้ดดูสะอาดและทำงานได้เหมือนเดิม.
