# Handle JSON, JSONP and CORS with Express.js.

Example of Express.js web server with JSONP and CORS support.

## Run

1. `npm install` 
2. `npm install --global http-server`.
3. Navigate to `server/` directory and run `node server`.
4. Navigate to `client/` directory and run `http-server -p 8080`.
5. Open `http://localhost:8080` in Google Chrome web browser.
6. Open JavaScript console.
7. Click `Get JSON` button to send Cross-Origin XMLHttpRequest __with JSON__.
8. Click `Get JSONP` button to send Cross-Origin XMLHttpRequest __with JSONP__.
9. Click `Get CORS` button to send Cross-Origin XMLHttpRequest __with JSON where CORS is enabled on the server__.

## Understand server endpoints

| Endpoint      | JSON response? | JSONP response? | CORS enabled?    |
|---------|------|-------|---------|
| `/json` | Yes  | No    | No      |
| `/jsonp`| No   | Yes   | No |
| `/cors` | Yes | No | Yes |

## Learn more

+ http://expressjs.com/en/api.html#res.jsonp
+ http://enable-cors.org
