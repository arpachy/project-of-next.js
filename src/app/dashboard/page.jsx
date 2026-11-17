import React from 'react';
import Counter from '../components/counter';

const DashBoardPage= () => {

console.log("Dashboard page rendered");

    return (
        <div>
            <h1>Dashboard</h1>

            <Counter></Counter>
            <p>Welcome to the Dashboard!</p>    
            <ul>
                <li>Dashboard item 1</li>
                <li>Dashboard item 2</li>       
                <li>Dashboard item 3</li>  
            </ul>
        </div>
    );
};

export default DashBoardPage;
