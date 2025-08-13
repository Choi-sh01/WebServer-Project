import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRegion } from '../contexts/RegionContext';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

// 카테고리 목록
const CATEGORIES = ['정책', '청년', '인프라', '문화', '교육', '환경'];

const NewsList = () => {
  const { selectedProvince, selectedCity } = useRegion();
  const navigate = useNavigate();

  const [newsList, setNewsList] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (!selectedProvince || !selectedCity) {
      navigate('/');
    }
  }, [selectedProvince, selectedCity, navigate]);

  useEffect(() => {
    if (selectedProvince && selectedCity) {
      fetchNews();
    }
  }, [selectedProvince, selectedCity]);

  useEffect(() => {
    applyFilters();
  }, [searchKeyword, selectedCategory, newsList]);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/news', {
        params: {
          province: selectedProvince,
          city: selectedCity
        }
      });
      setNewsList(response.data);
      setFilteredNews(response.data);
    } catch (error) {
      console.error('뉴스를 불러오는데 실패했습니다:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...newsList];

    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(
        news =>
          news.title.toLowerCase().includes(keyword) ||
          news.summary.toLowerCase().includes(keyword)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }

    setFilteredNews(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">뉴스를 불러오는 중입니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {selectedProvince} {selectedCity} 뉴스
        </h1>
        <p className="text-gray-600">
          {selectedCity} 지역의 최신 소식을 확인하세요.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          handleSearch={handleSearch}
        />

        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default NewsList;
