import React from "react";

const Footer = () => {
  // Get the current date
  const currentDate = new Date();
  const options = { month: "long", year: "numeric" }; // Format for month and year
  const formattedDate = currentDate.toLocaleDateString("en-US", options); // Example: "December 2024"

  return (
    <div>
      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {formattedDate} © 
            <a href="#" className="hover:underline">
              Powered By Mohammad Mohammad
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
