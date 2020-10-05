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

const HeadComponents = [fbPixel]

exports.onRenderBody = ({setHeadComponents}) => {
  setHeadComponents(HeadComponents)
}
