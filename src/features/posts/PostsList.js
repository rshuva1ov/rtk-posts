import { useSelector } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";
import { selectPostIds, useGetPostQuery } from "./postsSlice";

const PostsList = () => {

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostQuery();

    const orderedPostIds = useSelector(selectPostIds)

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList