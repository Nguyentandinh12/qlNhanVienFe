// tao lop doi tuong nhan vien

//constructor
function NhanVien(maNV, tenNV, email, matKhau, ngaySinh, chucVu) {
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngaySinh;
    this.chucVu = chucVu;
    this.luongCB = 400;
    this.tongLuong = 0;
    // tổng lương = hệ số lương * lương cơ bản
    // sếp:3
    // trưởng phòng: 1.5
    // nhân viên :1
    this.tinhTongLuong = function() {
        if (this.chucVu === "Sếp") {
            this.tongLuong = this.luongCB * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            this.tongLuong = this.luongCB * 1.5;
        } else if (this.chucVu === "Nhân viên") {
            this.tongLuong = this.luongCB;
        }
    }
}