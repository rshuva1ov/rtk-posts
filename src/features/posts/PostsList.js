import React from 'react';
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = structuredClone(posts).sort((a, b) => b.date.localeCompare(a.date));

    const renderPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>
                {post.title}
                <p>
                    {post.content.substring(0, 100)}
                </p>
                <p className='postCredit'>
                    <PostsAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
            </h3>
            <ReactionButtons post={post} />
        </article>
    ))
    return (
        <section>
            <h2>
                Posts
            </h2>
            {renderPosts}
        </section>
    );
};

export default PostsList;