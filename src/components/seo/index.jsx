import React from "react";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Movies search</title>
      <meta
        name="description"
        content="A simple movie searcher, and I don't know what else to write in this tag"
      />
      {/* Facebook Open Graph Data */}
      <meta property="og:title" content="Movies search" />
      <meta
        property="og:description"
        content="A simple movie searcher, and I don't know what else to write in this tag"
      />
    </Helmet>
  );
};
