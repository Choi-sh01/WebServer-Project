import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '제보',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        type: '제보',
        content: ''
      });
    } catch (error) {
      console.error('제출 중 오류가 발생했습니다:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">제보 및 피드백</h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">지역 소식을 알려주세요!</h2>
        <p className="text-gray-700">
          알리고 싶은 지역 소식이나 서비스에 대한 피드백을 남겨주세요.
          여러분의 소중한 의견이 더 나은 서비스를 만드는 데 도움이 됩니다.
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-2xl font-bold mb-2">제출이 완료되었습니다!</h2>
          <p className="mb-4">소중한 의견 감사합니다.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            다른 내용 제출하기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">유형</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="제보">제보</option>
              <option value="피드백">피드백</option>
              <option value="제안">제안</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">내용</label>
            <textarea
              id="content"
              name="content"
              rows="6"
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? '제출 중...' : '제출하기'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
