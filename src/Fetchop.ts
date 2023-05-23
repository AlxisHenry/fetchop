import Helpers from './Helpers';
import {
  Method,
  Timeout,
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
 * @property {string} baseUrl - By default, you need to pass the full URL to the call method. If you set the baseUrl, you can pass only the path to the call method.
 * @property {string[]} recurringEndpoints - Set the recurring endpoints of your application (follow the pattern METHOD::/endpoint).
 * @property {Method} defaultMethod - Set the default method used by the class.
 * @property {Authorization} authorization - The authorization used by the class.
 * @property {Timeout} timeout - The timeout used by the class.
 * @property {boolean} retry - Dertermine if the class need to retry the request if it fail.
 * @property {Cache} cache - The cache used by the class.
 * @property {Credentials} credentials - The credentials used by the class.
 * @property {Mode} mode - The mode used by the class.
 * @property {Redirect} redirect - The redirect used by the class.
 * @property {Referrer} referrer - The referrer used by the class.
 * @property {ReferrerPolicy} referrerPolicy - The referrer policy used by the class.
 * @property {string} integrity - The integrity used by the class.
 * @property {boolean} keepalive - The keepalive used by the class.
 * @property {AbortSignal | null} signal - The signal used by the class.
 * @property {any} window - The window used by the class.
 * @property {any} agent - The agent used by the class.
 * @property {CredentialsPolicy} credentialsPolicy - The credentials policy used by the class.
 */
export class Fetchop implements FetchopInterface, FetchopAttributesInterface {
  //#region Attributes
  private baseUrl: string | null = null;
  private recurringEndpoints: string[] = [];
  private defaultMethod: Method = Method.GET;
  private authorization: Authorization = {
    type: AuthorizationType.BEARER,
    token: ''
  };
  private timeout: Timeout = Timeout.DEFAULT;
  private retry: boolean = false;
  private cache: Cache = Cache.DEFAULT;
  private credentials: Credentials = Credentials.OMIT;
  private mode: Mode = Mode.SAME_ORIGIN;
  private redirect: Redirect = Redirect.FOLLOW;
  private referrer: Referrer = Referrer.CLIENT;
  private referrerPolicy: ReferrerPolicy = ReferrerPolicy.NO_REFERRER_WHEN_DOWNGRADE;
  private integrity: string = '';
  private keepalive: boolean = false;
  private signal: AbortSignal | null = null;
  private window: any = null;
  private agent: any = null;
  private credentialsPolicy: CredentialsPolicy = CredentialsPolicy.OMIT;
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
  static call(uri: string, options = {}) {}
  //#endregion

  constructor(options?: FetchopAttributes) {
    if (options) this.configure(options);
  }

  /**
   * Configure the attributes of the class with the given options.
   */
  private configure(attributes: FetchopAttributes): void {
    this.setRecurringEndpoints(attributes.recurringEndpoints || []);
  }

  //#region Methods
  /**
   *
   */
  call(uri: string, options = {}): void {}

  /**
   *
   */
  get(url: string, options?: {}): void {}

  /**
   *
   */
  post(url: string, options?: {}): void {}

  /**
   *
   */
  put(url: string, options?: {}): void {}

  /**
   *
   */
  delete(url: string, options?: {}): void {}

  /**
   *
   */
  patch(url: string, options?: {}): void {}

  /**
   *
   */
  recuring(endpoint: string, id?: number, options?: {}): void {}
  //#endregion

  //#region Getters
  getBaseUrl(): string | null {
    return this.baseUrl;
  }

  getRecurringEndpoints(): string[] {
    return this.recurringEndpoints;
  }

  getDefaultMethod(): Method {
    return this.defaultMethod;
  }

  getAuthorization(): Authorization {
    return this.authorization;
  }

  getTimeout(): Timeout {
    return this.timeout;
  }

  getRetry(): boolean {
    return this.retry;
  }

  getCache(): Cache {
    return this.cache;
  }

  getCredentials(): Credentials {
    return this.credentials;
  }

  getMode(): Mode {
    return this.mode;
  }

  getRedirect(): Redirect {
    return this.redirect;
  }

  getReferrer(): Referrer {
    return this.referrer;
  }

  getReferrerPolicy(): ReferrerPolicy {
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

  getCredentialsPolicy(): CredentialsPolicy {
    return this.credentialsPolicy;
  }
  //#endregion

  //#region Setters
  protected setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  protected setRecurringEndpoints(recurringEndpoints: string[]): void {
    /**
     * Need to check if every items in the array are string and follow the pattern (METHOD::/endpoint).
     */
    recurringEndpoints.forEach(endpoint => {
      if (typeof endpoint !== 'string' || !endpoint.match(/^[A-Z]+::\/[a-z]+$/))
        throw new Error('Every items of the array must be a string and follow the pattern (METHOD::/endpoint).');
    });
    this.recurringEndpoints = recurringEndpoints;
  }

  protected setDefaultMethod(method: Method): void {
    this.defaultMethod = method;
  }

  protected setAuthorization(authorization: Authorization): void {
    this.authorization = authorization;
  }

  protected setTimeout(timeout: Timeout): void {
    this.timeout = timeout;
  }

  protected setRetry(retry: boolean): void {
    throw new Error('Method not implemented yet.');
  }

  protected setCache(cache: Cache): void {
    this.cache = cache;
  }

  protected setCredentials(credentials: Credentials): void {
    this.credentials = credentials;
  }

  protected setMode(mode: Mode): void {
    this.mode = mode;
  }

  protected setRedirect(redirect: Redirect): void {
    this.redirect = redirect;
  }

  protected setReferrer(referrer: Referrer): void {
    this.referrer = referrer;
  }

  protected setReferrerPolicy(referrerPolicy: ReferrerPolicy): void {
    this.referrerPolicy = referrerPolicy;
  }

  protected setIntegrity(integrity: string): void {
    this.integrity = integrity;
  }

  protected setKeepalive(keepalive: boolean): void {
    this.keepalive = keepalive;
  }

  protected setSignal(signal: AbortSignal | null): void {
    this.signal = signal;
  }

  protected setWindow(window: any): void {
    this.window = window;
  }

  protected setAgent(agent: any): void {
    this.agent = agent;
  }

  protected setCredentialsPolicy(credentialsPolicy: CredentialsPolicy): void {
    this.credentialsPolicy = credentialsPolicy;
  }
  //#endregion
}