import { useRouter } from "next/router";

const blogid = () => {
    const router = useRouter();
    const id = router.query.blogid;
    return (
        <div>
            <h1>This is a dynamic page of {id}</h1>
        </div>
    );
};

export default blogid;