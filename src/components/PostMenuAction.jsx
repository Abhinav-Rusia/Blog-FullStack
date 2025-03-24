import Image from "./Image";

const PostMenuAction = () => {
  return (
    <div className="">
      <h1 className="mt-6 mb-2 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <Image
          src="https://ik.imagekit.io/devabhi/bookmark.svg?updatedAt=1742725047822"
          w="20"
          h="20"
        />
        <span>Save this post</span>
      </div>

      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <Image src="https://ik.imagekit.io/devabhi/delete.svg?updatedAt=1742526717935" />
        <span>Delete this post</span>
      </div>
    </div>
  );
};
export default PostMenuAction;
