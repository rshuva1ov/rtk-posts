import React from 'react';
import PostsAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>
                {post.title}
                <p>
                    {post.body.substring(0, 100)}
                </p>
                <p className='postCredit'>
                    <PostsAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
            </h3>
            <ReactionButtons post={post} />
        </article>
    );
};

export default PostsExcerpt;