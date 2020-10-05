import "./src/styles/global.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const onRouteUpdate = () => {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
    fbq("track", "ViewContent");
  }
};