import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image  */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="https://ik.imagekit.io/devabhi/webd.jpg?updatedAt=1742622404779"
            className="object-cover w-full h-64"
            w="895"
          />
        </div>
        {/* Details  */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 Days ago</span>
        </div>
        {/* Title  */}
        <Link
          to="/test"
          className="hover:text-blue-800 text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Modern UI Trends That Boost Conversion Rates in 2025
        </Link>
        {/* Description - Added */}
        <p className="text-gray-600 mt-2">
          {`Discover the latest UI design strategies that are proven to increase user engagement and conversion rates. Learn how color psychology, micro-interactions, and intuitive navigation can transform your website's performance in today's competitive digital landscape.`}
        </p>
      </div>

      {/* Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second  */}
        <div className="flex justify-between gap-4">
          <div className="overflow-hidden rounded-2xl w-1/3 h-40">
            <Image
              src="https://ik.imagekit.io/devabhi/webd2.jpg?updatedAt=1742622404844"
              className="object-cover w-full h-full" w="298"
            />
          </div>
          {/* Add content for the right side of this row */}
          <div className="w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">02.</span>
              <Link className="text-blue-800">UI/UX</Link>
              <span className="text-gray-500 text-sm">3 Days ago</span>
            </div>
            <Link
              to="/post-2"
              className="font-semibold hover:text-blue-800 transition-colors"
            >
              Responsive Design Techniques for 2025
            </Link>
            {/* Description - Added */}
            <p className="text-gray-600 text-sm mt-2">
              Explore cutting-edge responsive design approaches for the
              multi-device ecosystem. From fluid typography to container
              queries, learn what techniques will define the responsive web
              landscape in 2025.
            </p>
          </div>
        </div>

        {/* Third  */}
        <div className="flex justify-between gap-4">
          <div className="overflow-hidden rounded-2xl w-1/3 h-40">
            <Image
              src="https://ik.imagekit.io/devabhi/trueJS.jpg?updatedAt=1742623860687"
              className="object-cover w-full h-full" w="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">03.</span>
              <Link className="text-blue-800">Frontend</Link>
              <span className="text-gray-500 text-sm">5 Days ago</span>
            </div>
            <Link
              to="/post-3"
              className="font-semibold hover:text-blue-800 transition-colors"
            >
              The Evolution of JavaScript Frameworks in 2025
            </Link>
            {/* Description - Added */}
            <p className="text-gray-600 text-sm mt-2">
              Analyze how modern JavaScript frameworks are adapting to new web
              standards and user expectations. From React 20 to Vue 4, discover
              which technologies are gaining traction and why developers are
              shifting their preferences.
            </p>
          </div>
        </div>

        {/* Fourth  */}
        <div className="flex justify-between gap-4">
          <div className="overflow-hidden rounded-2xl w-1/3 h-40">
            <Image
              src="https://ik.imagekit.io/devabhi/express.jpg?updatedAt=1742623611552"
              className="object-cover w-full h-full" w="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">04.</span>
              <Link className="text-blue-800">Backend</Link>
              <span className="text-gray-500 text-sm">1 Week ago</span>
            </div>
            <Link
              to="/post-4"
              className="font-semibold hover:text-blue-800 transition-colors"
            >
              Express.js 5.0: The Game-Changing Features You Cannot Ignore
            </Link>
            {/* Description - Added */}
            <p className="text-gray-600 text-sm mt-2">
              {` Deep dive into Express.js 5.0's revolutionary features that are reshaping Node.js development. Examine performance improvements, middleware enhancements, and security updates that make this release essential for backend developers.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
