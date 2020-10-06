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

const googleFonts = <script
  async
  key={`uh-google-fonts`}
  dangerouslySetInnerHTML={{
    __html: `
    <link rel="preload" href="https://unifiedhealthadvisors.com/gapis/css?family=Roboto:300,400,400i,500i,900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <noscript><link rel="stylesheet" href="https://unifiedhealthadvisors.com/gapis/css?family=Roboto:300,400,400i,500i,900&display=swap"></noscript>
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

const HeadComponents = [fbPixel, googleFonts, gtag, gtagInlineScript]
const PostBodyComponents = [hotjar]

exports.onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
  setHeadComponents(HeadComponents)
  setPostBodyComponents(PostBodyComponents)
}
