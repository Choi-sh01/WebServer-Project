const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">카테고리</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-full ${
            !selectedCategory 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setSelectedCategory('')}
        >
          전체
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;