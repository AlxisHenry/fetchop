import Helpers from './Helpers';
import {
  Method,
  Cache,
  Credentials,
  Mode,
  Redirect,
  Referrer,
  ReferrerPolicy,
  CredentialsPolicy,
  AuthorizationType,
  FetchopInterface,
  FetchopAttributesInterface,
  type Authorization,
  type FetchopAttributes
} from './types';

/**
 *
 * The Fetchop class is a wrapper around the fetch API.
 *
 * @private {string} baseUrl - By default, you need to pass the full URL to the call method. If you set the baseUrl, you can pass only the path to the call method.
 * @private {string[]} recurrentEndpoints - Set the recurrent endpoints of your application (follow the pattern METHOD::/endpoint).
 * @private {Method} defaultMethod - Set the default method used by the class.
 * @private {Authorization} authorization - The authorization used by the class.
 * @private {Timeout} timeout - The timeout used by the class (in milliseconds).
 * @private {boolean} retry - Dertermine if the class need to retry the request if it fail.
 * @private {Cache} cache - The cache used by the class.
 * @private {Credentials} credentials - The credentials used by the class.
 * @private {Mode} mode - The mode used by the class.
 * @private {Redirect} redirect - The redirect used by the class.
 * @private {Referrer} referrer - The referrer used by the class.
 * @private {ReferrerPolicy} referrerPolicy - The referrer policy used by the class.
 * @private {string} integrity - The integrity used by the class.
 * @private {boolean} keepalive - The keepalive used by the class.
 * @private {AbortSignal | null} signal - The signal used by the class.
 * @private {string | null} window - The window used by the class.
 * @private {string | null} agent - The agent used by the class.
 * @private {CredentialsPolicy} credentialsPolicy - The credentials policy used by the class.
 * @private {RegExp} recurrentEndpointRegex - The regex used to check if the recurrent endpoint follow the pattern.
 * @static {Helpers} helpers - This method allwo you to use the helpers methods.
 * @static {Fetchop} initialize - This method is used to create a new instance of the Fetchop class with a specific configuration.
 * @method {void} call - This method is used to make a request.
 * @method {void} get - This method is used to make get request.
 * @method {void} post - This method is used to make post request.
 * @method {void} put - This method is used to make put request.
 * @method {void} delete - This method is used to make delete request.
 * @method {void} patch - This method is used to make patch request.
 * @method {void} recurrent - This method is used to make a request to a recurrent endpoint.
 * @method {Helpers} helpers - This method allwo you to use the helpers methods.
 * @method {string | null} getBaseUrl - Get the baseUrl attribute.
 * @method {string[]} getRecurrentEndpoints - Get the recurrentEndpoints attribute.
 * @method {Method} getDefaultMethod - Get the defaultMethod attribute.
 *
 */
export class Fetchop implements FetchopInterface, FetchopAttributesInterface {
  //#region Attributes
  private baseUrl: string | null = null;
  private recurrentEndpoints: string[] = [];
  private defaultMethod: string = Method.GET;
  private authorization: Authorization = {
    type: AuthorizationType.BEARER,
    token: ''
  };
  private timeout: number = 3000;
  private retry: boolean = false;
  private cache: string = Cache.DEFAULT;
  private credentials: string = Credentials.OMIT;
  private mode: string = Mode.SAME_ORIGIN;
  private redirect: string = Redirect.FOLLOW;
  private referrer: string = Referrer.CLIENT;
  private referrerPolicy: string = ReferrerPolicy.NO_REFERRER_WHEN_DOWNGRADE;
  private integrity: string = '';
  private keepalive: boolean = false;
  private signal: AbortSignal | null = null;
  private window: string | null = null;
  private agent: string | null = null;
  private credentialsPolicy: string = CredentialsPolicy.OMIT;
  private static recurrentEndpointRegex: RegExp = /^([A-Z]+)::\/([a-zA-Z0-9\/:\-]+)$/;
  //#endregion

  //#region Static Methods
  /**
   * This method allwo you to use the helpers methods.
   */
  static helpers(): Helpers {
    return new Helpers();
  }

  /**
   * This method is used to create a new instance of the Fetchop class with a specific configuration.
   */
  static initialize(options: FetchopAttributes): Fetchop {
    return new Fetchop(options);
  }

  /**
   * This method is used to make a simple request.
   *
   * @param {string} uri - The uri of the request, need to use the syntax (METHOD::{url}). If you set the baseUrl, you can pass only the path to the call method.
   */
  static call(uri: string, options = {}) {
    return new Fetchop().call(uri, options);
  }
  //#endregion

  constructor(options?: FetchopAttributes) {
    if (options) this.configure(options);
  }

  /**
   * Configure the attributes of the class with the given options.
   */
  private configure(attributes: FetchopAttributes): void {
    Object.keys(attributes).forEach((key, index) => {
      let setter = this.helpers().getAttributeMethods(key).setter;
      if (typeof (this as FetchopInterface)[setter] === 'function') {
        (this as FetchopInterface)[setter](Object.values(attributes)[index]);
      }
    });
  }

  /**
   * Check if the given element is allowed by the class.
   */
  private isAllowed(key: string, element: string, allowed: object): void {
    const values: string[] = Object.values(allowed);
    let state: boolean = values.includes(element);
    if (!state) throw new Error(`The given ${key} is not allowed. Allowed ${key}(s): ${values.toString()}`);
  }

  //#region Methods
  /**
   * The helpers method is used to have access to the helpers methods.
   */
  helpers(): Helpers {
    return new Helpers(this);
  }

  /**
   * This method is used to make a request.
   */
  call(uri: string, options = {}): void {

  }

  /**
   * This method is used to make get request.
   */
  get(url: string, options?: {}): void {
    this.call(Method.GET + '::/' + url, options);
  }

  /**
   * This method is used to make post request.
   */
  post(url: string, options?: {}): void {
    this.call(Method.POST + '::/' + url, options);
  }

  /**
   * This method is used to make put request.
   */
  put(url: string, options?: {}): void {
    this.call(Method.PUT + '::/' + url, options);
  }

  /**
   * This method is used to make delete request.
   */
  delete(url: string, options?: {}): void {
    this.call(Method.DELETE + '::/' + url, options);
  }

  /**
   * This method is used to make patch request.
   */
  patch(url: string, options?: {}): void {
    this.call(Method.PATCH + '::/' + url, options);
  }

  /**
   * This method is used to make a request to a recurrent endpoint.
   */
  recurrent(endpoint: string, id?: number, options?: {}): void {
    if (id) endpoint = endpoint.replace(':id', id.toString());
    this.call(endpoint, options);
  }
  //#endregion

  //#region Getters
  getBaseUrl(): string | null {
    return this.baseUrl;
  }

  getrecurrentEndpoints(): string[] {
    return this.recurrentEndpoints;
  }

  getDefaultMethod(): string {
    return this.defaultMethod;
  }

  getAuthorization(): Authorization {
    return this.authorization;
  }

  getTimeout(): number {
    return this.timeout;
  }

  getRetry(): boolean {
    return this.retry;
  }

  getCache(): string {
    return this.cache;
  }

  getCredentials(): string {
    return this.credentials;
  }

  getMode(): string {
    return this.mode;
  }

  getRedirect(): string {
    return this.redirect;
  }

  getReferrer(): string {
    return this.referrer;
  }

  getReferrerPolicy(): string {
    return this.referrerPolicy;
  }

  getIntegrity(): string {
    return this.integrity;
  }

  getKeepalive(): boolean {
    return this.keepalive;
  }

  getSignal(): AbortSignal | null {
    return this.signal;
  }

  getWindow(): any {
    return this.window;
  }

  getAgent(): any {
    return this.agent;
  }

  getCredentialsPolicy(): string {
    return this.credentialsPolicy;
  }

  getRecurrentEndpoints(): string[] {
    return this.recurrentEndpoints;
  }

  static getRecurrentEndpointRegex(): RegExp {
    return this.recurrentEndpointRegex;
  }
  //#endregion

  //#region Setters
  protected setBaseUrl(baseUrl: string | null): void {
    // if (typeof baseUrl !== "string" && baseUrl !== null) throw new Error('The baseUrl must be a string or null.');
    this.baseUrl = baseUrl;
  }

  protected setRecurrentEndpoints(recurrentEndpoints: string[]): void {
    if (typeof recurrentEndpoints !== 'object') throw new Error('The recurrentEndpoints must be an array.');
    if (this.getBaseUrl() === null)
      throw new Error('You must set the baseUrl attribute to use the recurrent endpoints feature.');
    recurrentEndpoints.forEach(endpoint => {
      if (typeof endpoint !== 'string' || !endpoint.match(Fetchop.recurrentEndpointRegex))
        throw new Error('Every items of the array must be a string and follow the pattern (METHOD::/endpoint).');
    });
    this.recurrentEndpoints = recurrentEndpoints;
  }

  protected setDefaultMethod(method: string): void {
    if (typeof method !== 'string') throw new Error('The method must be a string.');
    this.isAllowed('method', method, Method);
    this.defaultMethod = method;
  }

  protected setAuthorization(authorization: Authorization): void {
    if (typeof authorization !== 'object') throw new Error('The authorization must be an object.');
    if (typeof authorization.type !== 'string') throw new Error('The authorization type must be a string.');
    this.isAllowed('authorization type', authorization.type, AuthorizationType);
    this.authorization = authorization;
  }

  protected setTimeout(timeout: number): void {
    if (typeof timeout !== 'number') {
      throw new Error('The timeout must be a number.');
    } else if (timeout < 0) {
      throw new Error('The timeout must be a positive number.');
    } else if (timeout > 8500) {
      throw new Error('The timeout must be less than 8500 milliseconds.');
    }
    this.timeout = timeout;
  }

  protected setRetry(retry: boolean): void {
    if (typeof retry !== "boolean") throw new Error('The retry must be a boolean.');
    this.retry = retry;
  }

  protected setCache(cache: string): void {
    if (typeof cache !== "string") throw new Error('The cache must be a string.');
    this.isAllowed('cache', cache, Cache);
    this.cache = cache;
  }

  protected setCredentials(credentials: string): void {
    if (typeof credentials !== "string") throw new Error('The credentials attribute must be a string.');
    this.isAllowed('credentials', credentials, Credentials);
    this.credentials = credentials;
  }

  protected setMode(mode: string): void {
    if (typeof mode !== "string") throw new Error('The mode must be a string.');
    this.isAllowed('mode', mode, Mode);
    this.mode = mode;
  }

  protected setRedirect(redirect: string): void {
    if (typeof redirect !== "string") throw new Error('The redirect must be a string.');
    this.isAllowed('redirect', redirect, Redirect);
    this.redirect = redirect;
  }

  protected setReferrer(referrer: string): void {
    if (typeof referrer !== "string") throw new Error('The referrer must be a string.');
    this.isAllowed('referrer', referrer, Referrer);
    this.referrer = referrer;
  }

  protected setReferrerPolicy(referrerPolicy: string): void {
    if (typeof referrerPolicy !== "string") throw new Error('The referrerPolicy must be a string.');
    this.isAllowed('referrerPolicy', referrerPolicy, ReferrerPolicy);
    this.referrerPolicy = referrerPolicy;
  }

  protected setIntegrity(integrity: string): void {
    if (typeof integrity !== "string") throw new Error('The integrity must be a string.');
    this.integrity = integrity;
  }

  protected setKeepalive(keepalive: boolean): void {
    if (typeof keepalive !== "boolean") throw new Error('The keepalive must be a boolean.');
    this.keepalive = keepalive;
  }

  protected setSignal(signal: AbortSignal | null): void {
    if (typeof signal !== "object") throw new Error('The signal must be an object.');
    this.signal = signal;
  }

  protected setWindow(window: any): void {
    this.window = window;
  }

  protected setAgent(agent: any): void {
    this.agent = agent;
  }

  protected setCredentialsPolicy(credentialsPolicy: string): void {
    if (typeof credentialsPolicy !== "string") throw new Error('The credentialsPolicy must be a string.');
    this.isAllowed('credentialsPolicy', credentialsPolicy, CredentialsPolicy);
    this.credentialsPolicy = credentialsPolicy;
  }
  //#endregion
}
