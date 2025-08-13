import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-2 md:mb-0">
          강원포커스
        </Link>
        
        
        
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">홈</Link></li>
            <li><Link to="/news" className="hover:text-blue-200">뉴스</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">소개</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">제보</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;