const SearchBar = ({ searchKeyword, setSearchKeyword, handleSearch }) => {
  return (
    <div className="mb-6">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default SearchBar;