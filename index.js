addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(someHTML, init)
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})
const someHTML =  `<!DOCTYPE html>
<html>
  <body>
  <h1>Very!</h1>
  <p>It's always suprisingly busy.  Always.</p>
  </body>
</html>
`
