const React = require("react")

const fbPixel = <script
async
key={`uh-facebook-pixel`}
dangerouslySetInnerHTML={{
  __html: `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=0;n.version='2.0';
  n.queue=[];t=b.createElement(e);e.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://unifiedhealthadvisors.com/connectfb/en_US/fbevents.js');
  fbq("init", "225246031877134");
  fbq("track", "PageView");
`,
}}
/>

const gtag = <script
  async
  key={`uh-gtag`}
  src={`https://unifiedhealthadvisors.com/gtagm/gtag/js?id=UA-144175240-1`}
/>

const gtagInlineScript = <script
  async
  key={`uh-gtag-inline-script`}
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-144175240-1");
  `,
  }}
/>

const hotjar = <script
  async
  key={`uh-hotjar`}
  dangerouslySetInnerHTML={{
    __html: `
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 1920090, hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, "https://unifiedhealthadvisors.com/static_hjar/c/hotjar-", ".js?sv=");
    `,
  }}
/>

const microdata = <script
  async
  key={`uh-microdata`}
  type={`application/ld+json`}
  dangerouslySetInnerHTML={{
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://unifiedhealth.com",
      "logo": "https://unifiedhealth.com/aws/images/blue+full+.svg",
      "image": ["https://cfd-web.s3.us-east-2.amazonaws.com/images/blue%2Bbox%2Bfull.svg"],
      "@id": "https://unifiedhealth.com",
      "name": "Unified Health",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13621 NW 12th Street",
        "addressLocality": "Sunrise",
        "addressRegion": "FL",
        "postalCode": "33323",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.13660400000001,
        "longitude": -80.33222900000001
      },
      "telephone": "+18559310267",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          "opens": "08:00:00",
          "closes": "20:00:00"
        },
      ],      
    }
  `,
  }}
/>

const HeadComponents = [fbPixel, gtag, gtagInlineScript, microdata]
const PostBodyComponents = [hotjar]

exports.onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
  setHeadComponents(HeadComponents)
  setPostBodyComponents(PostBodyComponents)
}
