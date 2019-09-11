import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Links from '../components/Links';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export const config = {
  amp: true
}

export default () => {
  const isAmp = useAmp()

  return (
    <Layout>
      <Head>
        <title>CHAIN | Link Page for Bios</title>
        <meta name="description" content="Serverless link in bio page based on amp-next." />
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico?v=2" />
      </Head>
      <div className="content">
        <Profile />
        <Links />
        <Footer />
      </div>
      <style jsx>{`
      .content {
        max-width: 700px;
        margin: 0 auto;
      }
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
