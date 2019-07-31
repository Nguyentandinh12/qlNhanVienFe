function validation() {
    // kiem tra rong
    this.kiemTraRong = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isvalid = true;
            if (value === "") {
                isvalid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;
            } else {
                getEle(idThongBao).innerHTML = "";
            }
            return isvalid;
        }
        // kiem tra dinh dang chu
    this.kiemTraDungKyTu = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isvalid = true;
            var pattern = new RegExp(
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
            );
            if (!pattern.test(value)) {
                isvalid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;
            } else {
                getEle(idThongBao).innerHTML = "";
            }
            return isvalid;
        }
        // kiem tra email
    this.kiemTraEmail = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isvalid = true;
            var pattern = new RegExp(
                "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
                "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
            );
            if (!pattern.test(value)) {
                isvalid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;
            } else {
                getEle(idThongBao).innerHTML = "";
            }
            return isvalid;
        }
        // kiem tra do dai
    this.kiemTraDoDai = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isvalid = true;
            if (value.length < min || value.length > max) {
                isvalid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;
            } else {
                getEle(idThongBao).innerHTML = "";
            }
            return isvalid;
        }
        // kiem tra chuc vu 
    this.kiemTraChucVu = function() {
        var chucVuElm = getEle("chucvu");
        var isvalid = true;
        if (chucVuElm.selectedIndex === 0) {
            isvalid = false;
            getEle("tbChucVu").style.display = "block";
            getEle("tbChucVu").innerHTML = "(*) vui long chon chuc vu";
        } else {
            getEle("tbChucVu").innerHTML = "";
        }
        return isvalid;
    }
}