import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition duration-300">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;