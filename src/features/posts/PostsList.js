import React from 'react';
import { useSelector } from "react-redux";
import PostsExcerpt from './PostsExcerpt';
import { getPostsError, getPostsStatus, selectPostIds } from "./postsSlice";


const PostsList = () => {
    const orderedPostIds = useSelector(selectPostIds);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    let content;
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded') {
        // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postsStatus === 'failed') {
        content = <p>{postsError}</p>
    }

    return (
        <section>
            {content}
        </section>
    );
};

export default PostsList;