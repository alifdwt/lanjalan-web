import ThreadCard from "@/components/cards/ThreadCard";
import { fetchThreads } from "@/lib/actions/thread.action";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const result = await fetchThreads(1, 30)
  const user = await currentUser()

  return (
    <>
      <h1 className="head-text text-left">Beranda</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">Tidak ada thread</p>
        ) : (
          result.posts.map((post) => (
            <ThreadCard 
              key={post._id} 
              id={post._id} 
              currentUserId={user?.id || ""}
              parentId={post.parentId}
              content={post.text}
              author={post.author}
              createdAt={post.createdAt}
              comments={post.children}
              community={post.community}
            />
          ))
        )}
      </section>
    </>
  );
}
