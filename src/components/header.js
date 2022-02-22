const Header = {
    render() {
        return /* html */ `
        
        <div class="header">
            
            <div class="logo">
                    <a href="index.html"><img src="images/store_1587022637_735.jpg" alt=""  title="logo" width="100px" /></a>
            </div>
            <div class="nav-right">
                <ul class="nav">
                    <li class="active"><a href="/">Trang chủ</a></li>
                    <li><a href="/about">Giới thiệu</a></li>
                    <li><a href="/product">Sản phẩm</a></li>
                    <li><a href="contact.html">Phản hồi</a></li>
                    <li><a href="/auth/signup">Đăng kí</a></li>
                    <li><a href="/auth/login">Đăng nhập</a></li>
                    <li><a href="#">Thanh Toán</a></li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    <div class="menu-bg">
        <ul class="menu">
            <li><a href="home-appliances.html">Đồ da dụng</a></li>
            <li><a href="accessories.html">Phụ kiện</a>
                <ul>
                    <li><a href="accessories.html" >Máy tính bảng</a></li>
                    <li><a href="accessories.html">Máy ảnh</a></li>
                    <li><a href="accessories.html">Thiết bị ngoại vi</a></li>
                </ul>
            </li>
            <li><a href="computing.html">Tin học</a></li>
            <li><a href="accessories.html" >Điện thoại di động</a></li>
        </ul> 
        <div class="search">
            <form>
                <input type="text" value="">
                <input type="submit" value="">
            </form>
        </div>
        <div class="clear"></div>
    </div>
        `;
    },
};
export default Header;