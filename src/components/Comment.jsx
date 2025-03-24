import { Link } from "react-router-dom";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="https://ik.imagekit.io/devabhi/alexUSER.jpg?updatedAt=1742797683842"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Abhishek Kumar</span>
        <span className="text-sm text-gray-500">1 day ago</span>
      </div>
      <div className="mt-4">
        <p>
          This post is a fantastic guide to web design! The tips on color,
          typography, and user experience are super helpful. {"Can't"} wait to
          apply these ideas to my next project.
        </p>
      </div>
    </div>
  );
};
export default Comment;
