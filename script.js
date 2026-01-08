let bieuThuc = ""; 

function buttonHandler(btn) {
    const giaTri = btn.innerText;
    const manHinh = document.getElementById("resultsInput");

    if (giaTri === "AC") {
        bieuThuc = "";
    } 
    else if (giaTri === "DEL") {
        bieuThuc = bieuThuc.slice(0, -1);
    } 
    else if (giaTri === "=") {
        if (bieuThuc !== "") {
            bieuThuc = tinhKetQua(bieuThuc);
        }
    } 
    else {
        bieuThuc = bieuThuc + giaTri;
    }

    manHinh.value = bieuThuc;
}

function tinhKetQua(chuoi) {
    try {
        let phepTinh = chuoi.replace(/x/g, "*").replace(/:/g, "/");
        
        let ketQua = eval(phepTinh); 

        return ketQua.toString(); 
    } catch (error) {
        return "Không nhập như vậy được đâu cậu ơiii:<<"; 
    }
}