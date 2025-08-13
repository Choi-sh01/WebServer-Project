import { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ newsId, onCommentAdded }) => {
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() || !password.trim()) return alert('내용과 비밀번호를 모두 입력해주세요.');

    try {
      await axios.post(`/api/news/${newsId}/comments`, {
        content,
        password,
      });
      setContent('');
      setPassword('');
      onCommentAdded();
    } catch (err) {
      console.error('댓글 작성 실패:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="댓글을 입력하세요..."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded p-2"
        placeholder="댓글 삭제용 비밀번호"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        댓글 작성
      </button>
    </form>
  );
};

export default CommentForm;
