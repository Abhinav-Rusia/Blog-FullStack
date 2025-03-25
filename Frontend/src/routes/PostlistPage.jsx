import { useState } from "react";
import PostLists from "../components/PostLists";
import SideMenu from "../components/SideMenu";

const PostlistPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        className="md:hidden bg-blue-800 text-sm text-white rounded-2xl mb-4 px-4 py-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"}
      </button>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostLists />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};
export default PostlistPage;
