import React from 'react';

const FoodDetailPage = async ({params}) => {
    const {foodid} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodid}`);
    const data = await res.json();
    
    const {dish_name, origin_and_population} = data.data ;
    
    
    return (
        <div>
            <h2>Food Detail:{foodid} </h2>
            <div>
            <p>{dish_name}</p>
            <p>{origin_and_population}</p>  
                </div>
        </div>
    );
};

export default FoodDetailPage;