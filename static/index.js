function analyzeInput() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let result = document.getElementById("result");
    
    const greenFlags = ["kind", "respect", "support", "น่ารัก", "ปลอบใจ", 
        "ผู้ชายใจดีและอ่อนโยน", "ผู้ชายมีความรับผิดชอบ", "ผู้ชายซื่อสัตย์", 
        "ผู้ชายเอาใจใส่คนรอบข้าง", "ผู้ชายมีความมั่นใจในตัวเอง", "ผู้ชายมีการสื่อสารที่ดี",
        "ผู้ชายสนับสนุนความเท่าเทียม", "ผู้ชายมีความเป็นผู้นำที่รับผิดชอบ", 
        "ผู้ชายใส่ใจสุขภาพและการพัฒนาตนเอง","Kind", "Respectful",
        "Supportive", "Responsible", "Honest", "Empathetic", 
        "Communicative", "Confident", "Understanding", "Mature","เมตตา",
         "เคารพ", "สนับสนุน", "รับผิดชอบ", "ซื่อสัตย์", "เข้าใจ", "สื่อสารดี", "มั่นใจ",
         "เอื้อเฟื้อ", "อดทน", "เป็นมิตร", "อดกลั้น", "อ่อนโยน", "รอบคอบ", "ใจกว้าง", 
         "นอบน้อม", "มีเหตุผล", "มีน้ำใจ", "เอาใจใส่", "พิจารณา", "สุภาพ", 
         "เห็นอกเห็นใจ", "มีความคิดสร้างสรรค์", "ตั้งใจ", "รักเพื่อน","ไม่สูบบุหรี่", "ตอบแชทไว", "ไม่ดองแชท", 
         "ไม่ให้ความหวัง", "ไม่เล่นเกม", "ไม่เล่นมือถือ", "ไม่เล่นเฟส", "ไม่เล่นไลน์", 
         "ไม่เล่นอินสตา", "ไม่เล่นทวิต", "ไม่เล่นทวิตเตอร์","ไปไหนก็บอก"];
    const redFlags = ["lie", "cheat", "ignore", "ผู้ชายไม่ซื่อสัตย์", 
        "ผู้ชายไม่รับผิดชอบ", "ผู้ชายมีนิสัยหุนหันพลันแล่น", "ผู้ชายไม่ใส่ใจหรือเอาใจใส่คนอื่น", 
        "ผู้ชายมีพฤติกรรมเอาแต่ใจ", "ผู้ชายขาดการสื่อสารที่ชัดเจน", "ผู้ชายมีทัศนคติหยิ่ง", 
        "ผู้ชายไม่สนับสนุนความเท่าเทียม", "ผู้ชายมีนิสัยควบคุมหรือรังแก","ไม่เมตตา", "ไม่เคารพ", "ไม่สนับสนุน", "ไม่รับผิดชอบ",
         "ไม่ซื่อสัตย์", "ไม่เข้าใจ", "สื่อสารแย่", "ไม่มั่นใจ", "เห็นแก่ตัว", "ขี้โมโห", 
         "หยิ่ง", "เอาแต่ใจ", "ขาดน้ำใจ", "ไม่อ่อนโยน", "ไม่รอบคอบ", "หยาบคาย", "ทะเลาะบ่อย",
          "ไม่อดทน", "หลีกเลี่ยง", "ไร้เหตุผล", "ใจร้อน", "ไม่สุภาพ", "ไม่เห็นอกเห็นใจ", 
          "คิดเองทุกอย่าง", "ไม่ใส่ใจ", "ตอบแชทช้า","ดองแชท", "ให้ความหวัง", "ไม่ตอบแชท",
          "เล่นเกม", "เล่นมือถือ", "เล่นเฟส", "เล่นไลน์", "เล่นอินสตา", "เล่นทวิต", "เล่นทวิตเตอร์" ,'ช้า'
        ,"นอกใจ", "เจ้าชู้", "ทำร้ายเรา"];
    
    let isRedFlag = redFlags.some(word => input.includes(word));
    let isGreenFlag = greenFlags.some(word => input.includes(word) && !input.includes("ไม่" + word));
    
    if (isGreenFlag) {
        result.innerHTML = "💚 Green Flag! He’s a keeper!";
        result.style.color = "green";
    } else if (isRedFlag || input.includes("ไม่")) {
        result.innerHTML = "🚩 Red Flag! Watch out!";
        result.style.color = "red";
    } else {
        result.innerHTML = "🤔 Hmm... Maybe a yellow flag?";
        result.style.color = "orange";
    }
    
    // พยายามเล่นเพลงหลังจากคลิก Analyze
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.play().catch(err => {
            console.error("Autoplay blocked or error playing audio:", err);
        });
    }
}

// เมื่อโหลด DOM เสร็จแล้ว จะลองตรวจสอบสถานะของ audio
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.addEventListener("error", (e) => {
            console.error("Audio error:", e);
        });
        bgMusic.addEventListener("canplaythrough", () => {
            console.log("Audio is ready to play!");
        });
    }
});
