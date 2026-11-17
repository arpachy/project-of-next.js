import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
   const {id, dish_name, image_link, description} = food;
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={image_link}
      alt={dish_name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {dish_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      
      <Link href={`/menu/${id}`}>
      <div className="badge badge-outline">Show Details</div>
      </Link>
    </div>
  </div>
</div>
    );
};

export default FoodCard;