import React from "react";
import { Helmet } from "react-helmet";

export default () => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>React Movies Generator</title>
			<meta
				name="description"
				content="A simple movie searcher, and I don't know what else to write in this tag"
			/>
			<link
				rel="canonical"
				href="https://objective-wright-1c0423.netlify.com/"
			/>
			{/* Facebook Open Graph Data */}
			<meta property="og:title" content="React Movies Generator" />
			<meta
				property="og:description"
				content="A simple movie searcher, and I don't know what else to write in this tag"
			/>
			<meta
				property="og:url"
				content="https://objective-wright-1c0423.netlify.com/"
			/>
			{/* Twitter Card Data */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@domosaurusdex" />
			<meta name="twitter:creator" content="@domosaurusdex" />
		</Helmet>
	);
};
