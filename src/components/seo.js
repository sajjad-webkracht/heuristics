import * as React from 'react'
import twitterImage from '../images/OG-Heuristics-Preview.png';
import ogImage from '../images/X-Heuristics-Preview.png';
import favicon180x180 from '../images/favicon-180x180.png';
import favicon32x32 from '../images/favicon-32x32.png';
import favicon16x16 from '../images/favicon-16x16.png';


const Seo = ({ title, description }) => {
return (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={twitterImage} />
    <link rel="icon" type="image/svg+xml" href={favicon32x32} />
    <link rel="apple-touch-icon" sizes="180x180" href={favicon180x180} />
    <link rel="icon" type="image/svg+xml" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/svg+xml" sizes="16x16" href={favicon16x16} />
    <meta name="keywords" content="Heuristics, Nielsen, Usability, Jakob Nielsen, UX, User Experience" />
  </>
)
}

export default Seo