import React from "react";
import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Chain | Link in Bio</title>
      {/* Meta */}
      <meta charSet="utf-8" />
      <meta name="author" content="Byron Polley" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Serverless link in bio page based on amp-next."
      />

      {/* Favicon */}
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@b_b0t" />
      <meta name="twitter:site" content="@b_b0t" />
      <meta name="twitter:image" content="/1.jpg" />

      {/* Facebook */}
      <meta property="og:title" content="Chain" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://chain.byronpolley.com" />
      <meta
        property="og:description"
        content="Serverless link in bio page based on amp-next."
      />
      <meta property="og:image" content="/1.jpg" />
      <meta property="fb:app_id" content="915132422187282" />
    </Head>
  );
}
