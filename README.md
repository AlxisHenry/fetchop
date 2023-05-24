/**
dosent support query strings requests
 * Below is the default configuration of the Fetchop class.
 * 
 * Note that the default configuration can be overridden by passing a configuration object to the constructor or by calling the set methods.
 * If you want to change your configuration for a specific request, you can pass a configuration object to the call method.
 */
let fetch = new Fetchop({
  url: "", // By default, you need to pass the full URL to the call method. If you set the baseUrl, you can pass only the path to the call method.
  endpoints: [
    /**
     * With this attribute, you can set the recurring endpoints of your application (with the method and the path).
     * By configuring an endpoint like this you will be able to call the endpoint method with only the name and if needed an id.
     */
    "GET::/users",
    "GET::/users/:id",
    "POST::/users",
    "PUT::/users/:id",
    // ...
  ],
  defaultMethod: Method.GET,
  authorization: {
    type: "Bearer|Basic|Digest",
    token: "",
  },
  timeout: 5000, // Set the time in milliseconds to wait for a response. If the time has passed, the promise will be rejected.
  retry: false,
  // retry: [3, 500, [500, 502, 503, 504]], // Set the retry configuration (retries, delay, on).
  // retry: {
  //   retries: 3,
  //   delay: 500,
  //   on: [500, 502, 503, 504]
  // },
  cache: "default", // Set the cache mode (default, reload, no-cache).
  credentials: "same-origin", // Set the request credentials (omit, same-origin, include).
  mode: "cors", // Set the request mode (same-origin, no-cors, cors).
  redirect: "follow", // Set the redirect mode (follow, error, manual).
  referrer: "client", // Set the referrer policy (no-referrer, client).
  referrerPolicy: "no-referrer-when-downgrade", // Set the referrer policy (no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url).
  integrity: "", // Set the subresource integrity value.
  keepalive: false, // Set the keepalive value.
  signal: null, // Set the signal value.
  window: null, // Set the window value.
  agent: null, // Set the agent value.
  body: null, // Set the body value.
  headers: {}, // Set the headers value.
  credentialsPolicy: "omit", // Set the credentials policy (omit, same-origin, include).
});

// let users = fetch.call("/users"); // The default method is GET, so this will return you a promise.
// let response = fetch.call("/users/1", {
  // override the default or passed configuration to the instance for this request
  // method: "PUT",
// });

// fetch.recuring("users", 1); // If you have configured an endpoint with GET method and /users/:id path, you can call it like this.
// fetch.recuring("users"); // If you have configured an endpoint with GET method and /users path, you can call it like this.
/**
 * In the case you configure an POST, PUT, PATCH endpoint, you can call it like this.
 * fetch.recuring("users", {
 *  payload: {}
 * }); || fetch.recuring("users", 1, { payload: {} });
 */

/**
 * By using the initialize static method you can create a new instance of the Fetchop class with a specific configuration.
 * 
 * let fechop: Fetchop = Fetchop.initialize({}) // Will return you a new instance of the Fetchop class with the passed configuration (the default configuration will be overridden).
 */

/**
 * Also, you can use the set static method to make requests.
 * 
 * Fetchop.call("GET::/users", {
 *  // ...
 * });
 */
