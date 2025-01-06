/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Card({username, position = "Public"}) {
  // console.log("Props: ", props);
  console.log(username);
  console.log(position);
  
  
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/29890824/pexels-photo-29890824/free-photo-of-lush-green-forest-pathway-in-serene-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I have seen scale on
              large teams. It’s easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div>{position || "Public"}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
