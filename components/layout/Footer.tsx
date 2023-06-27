import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div
      className="text-purple-300 bg-[#14094fe6] text-center py-4 flex justify-between"
      style={{ zIndex: 2 }}
    >
      <div className="px-80">
        <p>Copyright © 2023 IEEE SRM SB. All Rights Reserved.</p>
      </div>
      <div className="px-8">
        <ul className=" text-purple-300 flex space-x-8">
        <li><a href="https://www.linkedin.com/company/ieeesrmist/" className="hover:text-white">linkedin</a></li>
          <li><a href="https://medium.com/" className="hover:text-white">medium</a></li>
          <li><a href="https://twitter.com/ieeesrmist?t=o9R7ph3-nF5ZdOE5yJyg8Q&s=08" className="hover:text-white">twitter</a></li>
          <li><a href="https://www.instagram.com/ieeesrmist/?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:text-white">instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
