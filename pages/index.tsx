import Head from "next/head";
import { useAmp } from "next/amp";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Links from "../components/Links";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export const config = {
  amp: true,
};

const Index = () => {
  const isAmp = useAmp();

  return (
    <Layout>
      <Meta />
      <div className="content">
        <Profile />
        <Links />
        <Footer />
      </div>
      <style jsx>{`
        .content {
          max-width: 730px;
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
  );
};

export default Index;
