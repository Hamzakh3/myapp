import { Post } from "@/types";

const Posts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url, { cache: "no-store" });
  
  if (!res.ok) {
    throw Error("Failed to fetch posts data");
  }

  const posts: [Post] = await res.json();

  return (
    <div className="flex flex-col justify-start gap-2">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="bg-blue-50 border border-black rounded-md p-4 flex flex-col gap-1"
          >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
