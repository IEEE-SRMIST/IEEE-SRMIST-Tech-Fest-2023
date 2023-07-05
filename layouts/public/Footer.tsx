import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="text-purple-300 bg-[#14094fe6] text-center py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-xs md:text-sm">
              Copyright © 2023 IEEE SRM SB. All Rights Reserved.
            </p>
          </div>
          <div className="md:text-sm">
            <ul className="flex flex-wrap space-x-4 lg:space-x-6 md:space-x-2 text-xs md:text-sm justify-center">
              <li>
                <a
                  href="https://www.linkedin.com/company/ieeesrmist/"
                  className="hover:text-white"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://medium.com/" className="hover:text-white">
                  medium
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ieeesrmist?t=o9R7ph3-nF5ZdOE5yJyg8Q&s=08"
                  className="hover:text-white"
                >
                  twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ieeesrmist/?igshid=MzRlODBiNWFlZA%3D%3D"
                  className="hover:text-white"
                >
                  instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
