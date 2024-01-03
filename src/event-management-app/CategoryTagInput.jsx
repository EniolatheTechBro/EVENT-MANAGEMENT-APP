import { useState } from 'react';

const CategoryTagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (index) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-full px-3 py-1 flex items-center justify-between"
        >
          <span>{tag}</span>
          <button
            onClick={() => removeTag(index)}
            className="ml-2 outline-none focus:outline-none"
          >
            &#x2715;
          </button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Add category/tag"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  );
};

export default CategoryTagInput;
