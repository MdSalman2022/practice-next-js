import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

export default function Home({ posts }) {
  return (
    <div>
      {/* <Head>
        <title>Home Page</title>
      </Head>
      <h1>Hello next JS</h1>
      <Link href="/blog">
        Blog
      </Link>

      <Image src="/img.jpg" width={400} height={200}></Image> */}

      <Banner />
      <div>
        {
          posts.map(
            post =>
              <div key={post.id} className="card my-10 mx-10 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                      <button className="btn btn-primary">See details</button>
                    </Link>
                  </div>
                </div>
              </div>
          )
        }
        <Link href="/posts">
          <button className="btn btn-primary">See more</button>
        </Link>
      </div>

      <Footer />




    </div>
  )
}



export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
  const data = await res.json()

  console.log(data)
  return {
    props: {
      posts: data
    }
  }
}