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

  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">

  <head>
    <style>
      
      
      body {
        background-color: pink;
        font-family: 'Open Sans', sans-serif;
      }

      h1 {
        color: #fafafa;
        font-size: 6em;
      }

      p {
        color: #fafafa;
      }

      .container {
          display: flex;           
          flex-direction: column;  
          justify-content: center; 
          align-items: center;
          height: 100vh;
      }

      .box {
          margin: 5px;
          text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">

        <div class="box">
            <h1> Very! </h1>
        </div>

        <div class="box">
            <p>Suprisingly so, as a mater of fact.</p>
        </div>

    </div>
  </body>
</html>
`
