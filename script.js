let bieuThuc = ""; 

function buttonHandler(btn) {
    const giaTri = btn.innerText;
    const manHinh = document.getElementById("resultsInput");

    if (giaTri === "AC") {
        bieuThuc = "";
    } 

    else if (giaTri === "DEL") {
        bieuThuc = bieuThuc.toString().slice(0, -1);
    } 
    else if (giaTri === "=") {
        if (bieuThuc !== "") {
            bieuThuc = tinhKetQua(bieuThuc);
        }
    } 
    else {
        if (bieuThuc === "Lỗi" || bieuThuc === "NaN" || bieuThuc === "Infinity") {
            bieuThuc = "";
        }

        if (bieuThuc === "" && (giaTri === "x" || giaTri === ":" || giaTri === "+")) {
            return; 
        }

        const kyTuCuoi = bieuThuc.toString().slice(-1);
        const danhSachDau = ["+", "-", "x", ":"];
        if (danhSachDau.includes(kyTuCuoi) && danhSachDau.includes(giaTri)) {
            bieuThuc = bieuThuc.toString().slice(0, -1) + giaTri;
        } else {
            bieuThuc = bieuThuc + giaTri;
        }
    }

    manHinh.value = bieuThuc;
}

function tinhKetQua(chuoi) {
    try {
        let phepTinh = chuoi.replace(/x/g, "*").replace(/:/g, "/");
        
        let ketQua = eval(phepTinh);

        if (isNaN(ketQua)) return "Không nhập như như vầy được!";
        if (!isFinite(ketQua)) return "Không chia cho 0 được đâu!"; 

        return Number(parseFloat(ketQua).toFixed(10)).toString();

    } catch (error) {

        return "Sai cú pháp rùi!!";
    }
}
