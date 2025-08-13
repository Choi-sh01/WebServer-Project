import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegion } from '../contexts/RegionContext';

// 강원도 시군구만
const CITIES = [
  '춘천시', '원주시', '강릉시', '동해시', '속초시', '삼척시', '태백시',
  '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군',
  '양구군', '인제군', '고성군', '양양군'
];

const RegionSelector = () => {
  const { selectRegion } = useRegion();
  const navigate = useNavigate();
  
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      selectRegion('강원도', city); // province는 강원도로 고정
      navigate('/news');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">강원도 지역 선택</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 mb-2">시/군/구</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">시/군/구 선택</option>
            {CITIES.map((cityName) => (
              <option key={cityName} value={cityName}>{cityName}</option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          뉴스 보기
        </button>
      </form>
    </div>
  );
};

export default RegionSelector;
