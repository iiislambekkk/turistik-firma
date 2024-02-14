import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";


const BlogPage = async () => {



    const posts = [
        { id: 1, title: "Post 1", body: "......", userId: 1, img: "/about1.png"},
        { id: 2, title: "Post 2", body: "......", userId: 1, img: "/about1.png"},
        { id: 3, title: "Post 3", body: "......", userId: 2, img: "/about1.png"},
        { id: 4, title: "Post 4", body: "......", userId: 2, img: "/about1.png"},
        { id: 5, title: "Post 5", body: "......", userId: 2, img: "/about1.png"},
    ];;


    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;