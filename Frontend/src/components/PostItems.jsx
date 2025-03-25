import { Link } from "react-router-dom";
import Image from "./Image";

const PostItems = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image  */}
      <div className="md:hidden xl:block">
      <Image
        src="https://ik.imagekit.io/devabhi/devops.jpg?updatedAt=1742655697816"
        alt="DevOps Image"
        className="rounded-2xl object-cover"
        width="735"
        height="400" 
        priority={false}
      />
    </div>
      {/* Details  */}
      <div className="flex flex-col gap-4">
        <Link
          to="/test"
          className="hover:text-blue-800 transition duration-200 text-3xl font-semibold"
        >
          Unlocking the Future of DevOps: How AI is Supercharging Software
          Delivery Like Never Before!
        </Link>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Written By</span>
          <Link className="text-blue-800">Abhinav Rusia</Link>
          <span>on</span>
          <Link className="text-blue-800">DevOps</Link>
          <span>2 days ago</span>
        </div>
        <p>
          AI and automation are revolutionizing DevOps, but how will they shape
          the future of software delivery? Faster releases, smarter
          processes—what’s next for DevOps? The game is about to change.
        </p>
        <Link to="/test" className="underline text-sm text-blue-800">Read more</Link>
      </div>
    </div>
  );
};
export default PostItems;
