import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>Not signed in</div>;
  }

  return (
    <div className="h-[cal(100vh-64px)] md:h-[cal(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a new post</h1>
      <form className="flex flex-col gap-6  mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Insert your title here"
        />

        <div className="flex items-center gap-4">
          <label className="text-sm" htmlFor="">
            Choose a category:
          </label>
          <select
            className="p-2 rounded-xl bg-transparent shadow-md"
            name="cat"
            id=""
          >
            <option value="general">General</option>
            <option value="Web-design">Web Design</option>
            <option value="Development">Development</option>
            <option value="Databases">Databases</option>
            <option value="DevOps">DevOps</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-transparent shadow-md outline-none"
          name="desc"
          id=""
          placeholder="Add short Description"
        />

        <ReactQuill
          theme="snow"
          className="h-96 p-2 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Publish
        </button>
      </form>
    </div>
  );
};
export default Write;
