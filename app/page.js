'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 xl:pt-[5.5rem]">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community{" "}
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects or
            landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>
 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
          <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
          <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
          <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-white py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Featured Blogs</h2>
      <p className="text-sm text-gray-600">Discover our top insights and stories</p>
    </div>
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Blog Card 1 */}
      <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/blog-1.jpg" 
            alt="Blog" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">Technology</span>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 group-hover:text-blue-500 transition-colors">
            Getting Started with Web Development
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            Learn the fundamentals of modern web development with our comprehensive guide...
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">5 min read</span>
            <Button className="mx-1" variant="outline" href="/blog-post-1">Read More</Button>

          </div>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/typescript.webp" 
            alt="Blog" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold text-green-500 bg-green-50 px-3 py-1 rounded-full">Design</span>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 group-hover:text-blue-500 transition-colors">
            UI Design Principles
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            Explore the essential principles of effective user interface design...
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">7 min read</span>
            <Button  className="mx-1" variant="outline" href="/blog-post-2">Read More</Button>

          </div>
        </div>
      </div>

      {/* Blog Card 3 */}
      <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="https://files.oaiusercontent.com/file-DFz9e7tabZcuZ8wS8yjWyj?se=2024-12-06T13%3A05%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd8512e22-74f1-4411-822c-32b3259e2164.webp&sig=J48hsy2zUYbJuUwJDStYZtFnXHulP6r6prNB6DzYIjk%3D" 
            alt="Blog" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold text-purple-500 bg-purple-50 px-3 py-1 rounded-full">Tips</span>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 group-hover:text-blue-500 transition-colors">
            Productivity Hacks for Developers
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            Boost your productivity with these proven development techniques...
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">4 min read</span>
            <Button className="m-2" variant="outline" href="/first-blog">Readd More</Button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
