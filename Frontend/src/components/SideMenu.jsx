import { Link } from "react-router-dom";
import Search from "../components/Search";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 font-medium">Search</h1>
      <Search />

      <h1 className="mt-8 mb-4 font-medium">Filter</h1>

      <div className="flex flex-col text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="newest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-600" /> Newest
        </label>

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="popular" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-600" /> Most popular 
        </label>

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="Trending" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-600" /> Trending
        </label>

        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value="Oldest" className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-600" /> Oldest
        </label>
      </div>

      <h1 className="mt-8 mb-4 font-medium">Categories</h1>

      <div className="flex flex-col gap-2 text-sm">
        <Link
          to="/posts"
          className="hover:text-blue-800 font-semibold underline"
        >
          All
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:text-blue-800 underline"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:text-blue-800 underline"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:text-blue-800 underline"
        >
          Databases
        </Link>
        <Link to="/posts?cat=devops" className="hover:text-blue-800 underline">
          DevOps
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:text-blue-800 underline"
        >
          Marketing
        </Link>
      </div>
    </div>
  );
};
export default SideMenu;
