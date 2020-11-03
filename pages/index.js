import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Header from'../components/header'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          {heroPost && (
            <div className="card card-plain card-blog" key={heroPost.slug}>
              <div className="row" key={`${heroPost.slug}-1`}>
                <div className="col-md-4" key={`${heroPost.slug}-2`}>
                  <div className="card-header card-header-image" key={`${heroPost.slug}-3`}>
                    <img className="img img-raised" src={heroPost.coverImage} key={`${heroPost.slug}-4`}/>
                    <div className="colored-shadow"  key={`${heroPost.slug}-5`} style={
                      {
                      backgroundImage: `url(${heroPost.coverImage})`, 
                      opacity: 1
                    }} />
                  </div>
                </div>
                <div className="col-md-8" key={`${heroPost.slug}-6`}>
                  <h6 className="card-category text-info" key={`${heroPost.slug}-7`}>Enterprise</h6>
                  <h3 className="card-title" key={`${heroPost.slug}-8`}>
                    <a href="#pablo" key={`${heroPost.slug}-9`}>{heroPost.title}</a>
                  </h3>
                  <p className="card-description" key={`${heroPost.slug}-10`}>
                  {heroPost.excerpt}
                    <a href="#pablo" key={`${heroPost.slug}-11`}> Read More </a>
                  </p>
                </div>
              </div>
            </div>
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
