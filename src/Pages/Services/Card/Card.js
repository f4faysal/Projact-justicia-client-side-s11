import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { title, img, price, details, img_details, lowCod , _id } = service;
  
  return (
    <div className="card w-auto bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img?img:'https://www.gotocourt.com.au/wp-content/uploads/2022/07/criminal_law_qld-min.jpg'} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className=" text-3xl card-title text-white">{title}</h2>

        <p>{details.slice(0, 100)}...</p>

        <figure className="w-full">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="rounded-lg" src={img?img:'https://www.gotocourt.com.au/wp-content/uploads/2022/07/criminal_law_qld-min.jpg'} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>

        <div className="card-actions justify-end">
          <Link 
            to={`/services/${_id}`}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
