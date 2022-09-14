const phoneEl = document.querySelector("#phone-number");
const analyticsEl = document.querySelector("#analytics");
console.log(phoneEl, analyticsEl);

phoneEl.value = "0988881234";

function analytics() {
    let phoneNumber = phoneEl.value;
    if (phoneNumber == "") {
        alert("請輸入手機號碼");
        return;
    }

    if (phoneNumber.length < 10) {
        alert("手機號碼為10個數字");
        return;
    }

    const re = /09\d{8}/;
    if (!re.test(phoneNumber)) {
        alert("手機號碼隔式不正確!");
        return;
    }
    console.log(phoneNumber);
    analyticsPhoneNumber(phoneNumber);

}

// 0918181818
function analyticsPhoneNumber(phoneNumber) {
    let fourNumber = phoneNumber.substring(phoneNumber.length - 4, phoneNumber.length);
    console.log(fourNumber);
    // 取得除以80的結果
    console.log(fourNumber / 80);
    // 取得整數部分
    console.log(parseInt(fourNumber / 80));
    // (除以80的結果-整數部分)*80
    let code = parseInt((fourNumber / 80 - parseInt(fourNumber / 80) * 80));
    console.log(code);

}