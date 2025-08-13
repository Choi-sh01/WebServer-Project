import { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ newsId, refreshTrigger, onCommentDeleted }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/api/news/${newsId}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error('댓글 조회 실패:', err));
  }, [newsId, refreshTrigger]);

  const handleDelete = async (commentId) => {
    const password = prompt('이 댓글을 삭제하려면 작성 시 설정한 비밀번호를 입력하세요:');
    if (!password) return;

    try {
      await axios.delete(`/api/news/${newsId}/comments/${commentId}`, {
        data: { password }
      });
      onCommentDeleted(); // 새로고침 트리거
    } catch (err) {
      alert(err.response?.data || '댓글 삭제에 실패했습니다.');
    }
  };

  return (
    <div className="mt-4 space-y-4">
      {comments.length === 0 ? (
        <p className="text-gray-500">아직 댓글이 없습니다.</p>
      ) : (
        <h3 className="font-semibold text-gray-700">총 {comments.length}개의 댓글</h3>
      )}
      {comments.map((comment) => (
        <div key={comment.id} className="border p-3 rounded shadow-sm">
          <p>{comment.content}</p>
          <div className="text-sm text-gray-500 mt-1 flex justify-between">
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
            <button
              onClick={() => handleDelete(comment.id)}
              className="text-red-500 hover:underline"
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
