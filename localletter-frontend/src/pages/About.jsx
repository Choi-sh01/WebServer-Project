// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">강원포커스 소개</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">서비스 배경</h2>
        <p className="text-gray-700 mb-4">
          강원포커스는 지역 소멸 위기에 대응하고, 지역의 다양한 소식을 알리기 위해 만들어진 플랫폼입니다.
          급격한 인구 감소와 고령화로 인해 많은 지역이 소멸 위기에 처해 있습니다.
        </p>
        <p className="text-gray-700">
          저희는 지역 활성화의 첫 단계가 정보 접근성 향상에 있다고 믿습니다.
          각 지역의 정책, 문화, 청년 지원 등 다양한 정보를 쉽게 접할 수 있도록 하여
          지역 발전과 인구 유입을 돕고자 합니다.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">서비스 목표</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>지역별 맞춤형 뉴스 제공을 통한 정보 접근성 향상</li>
            <li>지역 정책 및 지원 사업에 대한 인지도 증가</li>
            <li>지역 간 정보 불균형 해소</li>
            <li>지역 활성화를 위한 관심 증대</li>
            <li>지역 주민과 귀촌/귀농 희망자 간의 정보 격차 해소</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">서비스 특징</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">지역 맞춤형 뉴스</h3>
            <p className="text-gray-700">
              관심 지역을 선택하면 해당 지역에 특화된 뉴스를 제공받을 수 있습니다.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">카테고리별 필터링</h3>
            <p className="text-gray-700">
              정책, 청년, 인프라 등 관심 분야별로 뉴스를 필터링할 수 있습니다.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">키워드 검색</h3>
            <p className="text-gray-700">
              관심 키워드로 검색하여 원하는 정보를 빠르게 찾을 수 있습니다.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">제보 기능</h3>
            <p className="text-gray-700">
              지역 소식을 직접 제보하여 정보를 공유할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">이용 방법</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li className="font-medium">
              <span className="text-blue-600">지역 선택</span>
              <p className="ml-6 mt-1">
                홈 화면에서 강원도의 관심 있는 지역(시/군/구)을 선택합니다.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-blue-600">뉴스 목록 확인</span>
              <p className="ml-6 mt-1">
                선택한 지역의 뉴스 목록을 확인할 수 있습니다.
                카테고리별 필터나 키워드 검색을 통해 원하는 정보를 찾아보세요.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-blue-600">뉴스 상세 보기</span>
              <p className="ml-6 mt-1">
                관심 있는 뉴스를 클릭하면 상세 내용을 확인할 수 있습니다.
              </p>
            </li>
            <li className="font-medium">
              <span className="text-blue-600">제보하기</span>
              <p className="ml-6 mt-1">
                제보 페이지에서 지역 소식을 직접 제보할 수 있습니다.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default About;