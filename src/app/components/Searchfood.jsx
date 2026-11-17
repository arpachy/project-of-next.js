'use client';
import React , { use } from 'react';

const Searchfood = ({ foodPromise }) => {
    const foods = use(foodPromise);
    return (
        <div>
            <h2>Top Foods: {foods.length}</h2>
        </div>
    );
};

export default Searchfood;