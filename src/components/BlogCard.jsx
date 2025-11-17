import { Link } from "react-router-dom";

function truncateWords(text = "", wordLimit = 20) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

function BlogCard({ blog }) {
  return (
    <div className="blog-card bg-white rounded-[20px] overflow-hidden shadow-lg p-4 mb-8">
      <img className="rounded-[12px] w-full h-44 object-cover mb-4" src={blog.image} alt={blog.title} />
      <div className="blog-content">
        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-700 mb-3">{truncateWords(blog.description, 20)}</p>
        <Link to={`/post/${blog.id}`} className="text-blue-600 hover:underline">Read More</Link>
        <hr className="mt-4 border-gray-300"/>
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <p className="author">{blog.author}</p>
          <p className="date">{blog.date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
