import Head from 'next/head'
import Header from '/components/header.js'
import styles from "../styles/Home.module.css"
import BlogCard from '/components/BlogCard'
// Import Swiper styles
import { GraphQLClient, gql } from 'graphql-request'

import Footer from '/components/footer.js'
// import required modules
import Navbar from '/components/Navbar.jsx'

const graphcms = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cld1yz5560k8j01umg34xfwv5/master"
  );
  const QUERY = gql`
   {
    posts {
      id
      title
      datepublish
      slug
      content{
        html
      }
      author{
        ime
        avatar{
          url
        }
      }
      coverPhoto{
        url
      }
      }
    }
  `;
  export async function getStaticProps(){
    const {posts} =  await graphcms.request(QUERY); 
    return{
      props:{
      posts,
    },
    revalidate:130,
  };
  }
export default function Novosti(posts) {
    return(
       <div>
        <Head>

        </Head>
        <main>

<section className=' '>
    <Header />
    <Navbar />
    
</section>
<section>


  <h1 className=' text-center m-20  text-3xl sm:text-7xl ' >Новости</h1>
<div className={styles.container}>
{posts.map((post) =>(
  <BlogCard title={post.title} 
  author={post.author} 
  coverPhoto={post.coverPhoto}
   key={post.id} 
  datepublish={post.datepublish} 
  content={post.content}
  slug={post.slug}/>
))}
</div>

</section>
    <section>
        <Footer />
    </section>
        </main>
       </div>
    )
}