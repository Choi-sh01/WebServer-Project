import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshComments, setRefreshComments] = useState(0);

  useEffect(() => {
    fetchNewsDetail();
  }, [id]);

  const fetchNewsDetail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/news/${id}`);
      setNews(response.data);
    } catch (error) {
      console.error('뉴스 상세 정보를 불러오는데 실패했습니다:', error);
      setError('뉴스를 불러올 수 없습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => navigate(-1);
  const refresh = () => setRefreshComments((prev) => prev + 1);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  const imageSrc = news.imageUrl?.startsWith('http')
    ? news.imageUrl
    : `http://localhost:8081${news.imageUrl}`;

  return (
    news && (
      <div className="max-w-3xl mx-auto">
        <button onClick={handleGoBack} className="text-blue-500 hover:underline mb-4">
          ← 뒤로 가기
        </button>

        <article className="bg-white rounded shadow-md overflow-hidden mb-8">
          {news.imageUrl && (
            <div className="h-64 overflow-hidden">
              <img src={imageSrc} alt={news.title} className="w-full h-full object-contain" />
            </div>
          )}
          <div className="p-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{news.category}</span>
              <span>{new Date(news.publishedDate).toLocaleDateString('ko-KR')}</span>
            </div>
            <h1 className="text-2xl font-bold mb-4">{news.title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />
            {news.source && (
              <div className="text-sm text-gray-600 mt-4">
                출처:{" "}
                {news.source.startsWith("http") ? (
                  <a
                    href={news.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {news.source}
                  </a>
                ) : (
                  news.source
                )}
              </div>
            )}
          </div>
        </article>

        {/* 댓글 영역 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">댓글</h2>
          <CommentForm newsId={id} onCommentAdded={refresh} />
          <CommentList newsId={id} refreshTrigger={refreshComments} onCommentDeleted={refresh} />
        </section>
      </div>
    )
  );
};

export default NewsDetail;
