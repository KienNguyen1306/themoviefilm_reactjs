import { useSelector } from "react-redux";
import Logo from "../Header/Logo";
import { Link } from "react-router-dom";

function Footer() {
  
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <p className="title">
          Chào mừng bạn đến với website xem phim trực tuyến hoàn toàn miễn phí
          PHIMHAY.ORG. Đến với chúng tôi bạn sẽ được xem nhiều phim với thể loại
          nội dung hấp dẫn mới lạ, chất lượng phim rõ nét. Trang web nói không
          với phim thể loại ấu dâm, bạo dâm, khuyến cáo không được tự ý làm theo
          những điều trong phim tránh vi phạm pháp luật.
        </p>
        
        <p className="Copyright">© Copyright 2023 NDK, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
