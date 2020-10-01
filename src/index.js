export function buildUrl() {
  console.log("--SF Launch");
  return 'https://www.unifiedhealthadvisors.com/enroll/'
}

export function fbPxTrigger(option={goEmbed:true}) {
  /**Facebook Pixel Tracker for buttons*/
  let fbq;
  if(process.env.NODE_ENV === "production") {
    fbq = window.fbq;
    fbq("track", "ViewContent");
  }
  console.log("Facebook Pixel Tracker sended");
  if(option.goEmbed) window.open("https://unifiedhealthadvisors.com/enroll", "_blank");
}