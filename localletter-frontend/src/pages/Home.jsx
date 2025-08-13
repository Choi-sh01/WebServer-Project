import RegionSelector from '../components/RegionSelector';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">강원도 지역 맞춤형 뉴스를 확인하세요</h1>
        <p className="text-xl text-gray-600">
          강원포커스는 강원도 지역 기반 뉴스 플랫폼으로, 원하는 지역의 소식을 쉽게 확인할 수 있습니다.
        </p>
      </div>

      <div className="w-full max-w-lg">
        <RegionSelector />
      </div>
    </div>
  );
};

export default Home;
