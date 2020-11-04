import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from'../components/header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="main">
        <main>{children}</main>
        <div className="section-space"></div>
      </div>
      <Footer />
    </>
  )
}
