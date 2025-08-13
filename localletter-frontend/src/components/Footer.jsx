import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">강원포커스</h3>
            <p className="text-gray-300">지역 기반 맞춤형 뉴스 플랫폼</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">바로가기</h4>
            <ul>
              <li><Link to="/" className="text-gray-300 hover:text-white">홈</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">뉴스</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">소개</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">제보</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gangwon Focus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;