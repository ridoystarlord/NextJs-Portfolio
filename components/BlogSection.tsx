import React from 'react';

const BlogSection = () => {
  return (
    <section id="blogs">
      <div className="relative bg-gray-900 py-5 text-white md:py-20">
        <div className="container md:px-0">
          <h2 className="mb-2 text-center text-xl font-semibold text-orange-500">
            My Blogs
          </h2>
          <h2 className="mb-10 text-center text-3xl font-bold">
            My Recent Updates, Blog, Tips, Tricks & More
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative rounded-lg bg-gray-800 p-4 shadow-lg">
              <div className="relative">
                <img
                  src="/blog/blog-1.jpg" // Replace with actual image
                  alt="Social Media"
                  className="mb-4 rounded-md"
                />
                <div className="absolute right-5 top-5 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  23 Dec
                </div>
              </div>
              <div className="mb-2 flex items-center space-x-2">
                <div className="text-sm font-semibold text-orange-500">
                  Social Media
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                How designers and developers can collaborate better
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute left-10 top-10 hidden md:block">
          <img src="/blog/1.png" alt={`Background Icon`} />
        </div>
        <div className="absolute -top-20 right-0 hidden md:block">
          <img src="/blog/2.png" alt={`Background Icon`} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
