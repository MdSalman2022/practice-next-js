import { useRouter } from "next/router";

const PostDetails = ({ post }) => {

    const router = useRouter();

    const handleBack = () => {
        router.push("/posts")
    }

    return (
        <div>
            <div className="card mx-10 my-10 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Title: {post?.title}</h2>
                    <p>Post Id: {post?.id}</p>
                    <p>Post: {post?.body}</p>
                    <button onClick={handleBack} className="btn btn-primary">Back to post</button>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {

    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await res.json()

    console.log(data)
    return {
        props: {
            post: data
        }
    }
}


export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    const paths = posts.map(post => {
        return {
            params: {
                postid: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}


export default PostDetails;