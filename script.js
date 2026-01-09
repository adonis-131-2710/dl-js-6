let bieuThuc = ""; 
let vuaBamBang = false; 

function buttonHandler(btn) {
    const giaTri = btn.innerText;
    const manHinh = document.getElementById("resultsInput");

    if (giaTri === "AC") {
        bieuThuc = "";
        vuaBamBang = false;
    } 
    else if (giaTri === "DEL") {
        if (isNaN(bieuThuc) && typeof bieuThuc === "string" && bieuThuc.length > 10) {
            bieuThuc = "";
        } else {
            bieuThuc = bieuThuc.toString().slice(0, -1);
        }
        vuaBamBang = false;
    } 
    else if (giaTri === "=") {
        if (bieuThuc !== "") {
            bieuThuc = tinhKetQua(bieuThuc);
            vuaBamBang = true;
        }
    } 
    else {
        const danhSachDau = ["+", "-", "x", ":"];

        if (vuaBamBang) {
            if (!danhSachDau.includes(giaTri)) {
                bieuThuc = giaTri;
            } else {
                if (isNaN(bieuThuc)) bieuThuc = "";
                else bieuThuc = bieuThuc + giaTri;
            }
            vuaBamBang = false;
        } else {
            if (bieuThuc === "" && (giaTri === "x" || giaTri === ":" || giaTri === "+")) return;

            const kyTuCuoi = bieuThuc.toString().slice(-1);
            if (danhSachDau.includes(kyTuCuoi) && danhSachDau.includes(giaTri)) {
                bieuThuc = bieuThuc.toString().slice(0, -1) + giaTri;
            } else {
                bieuThuc = bieuThuc + giaTri;
            }
        }
    }

    manHinh.value = bieuThuc;
}

function tinhKetQua(chuoi) {
    try {
        let phepTinh = chuoi.replace(/x/g, "*").replace(/:/g, "/");
        let ketQua = eval(phepTinh);

        if (isNaN(ketQua)) return "Không tính được nè!";
        if (!isFinite(ketQua)) return "Không chia cho 0 được!"; 

        return Number(parseFloat(ketQua).toFixed(10)).toString();

    } catch (error) {
        return "Lỗi cú pháp rồi!";
    }
}
