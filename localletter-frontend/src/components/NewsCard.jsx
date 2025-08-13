import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { id, title, summary, imageUrl, category, publishedDate } = news;

  // 날짜 포맷 (예: 2025.05.07)
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    : '';

  // 이미지 경로 처리
  const imageSrc = imageUrl?.startsWith('http')
    ? imageUrl
    : `http://localhost:8081${imageUrl}`; // /images/abc.jpg → 서버 주소 추가

  return (
    <Link to={`/news/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
        {imageUrl && (
          <div className="h-48 overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {category}
            </span>
            <span className="text-gray-500 text-sm">{formattedDate}</span>
          </div>

          <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
