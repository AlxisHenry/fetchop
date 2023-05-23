export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export enum HTTPStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  PAYLOAD_TOO_LARGE = 413,
  UNSUPPORTED_MEDIA_TYPE = 415,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503
}

export enum AuthorizationType {
  BEARER = 'Bearer',
  BASIC = 'Basic',
  DIGEST = 'Digest'
}

export enum Timeout {
  REDUCED = 1000,
  DEFAULT = 5000,
  EXTENDED = 9000,
  INFINITE = 0
}

export enum Cache {
  DEFAULT = 'default',
  RELOAD = 'reload',
  NO_CACHE = 'no-cache'
}

export enum Credentials {
  OMIT = 'omit',
  SAME_ORIGIN = 'same-origin',
  INCLUDE = 'include'
}

export enum Mode {
  SAME_ORIGIN = 'same-origin',
  NO_CORS = 'no-cors',
  CORS = 'cors'
}

export enum Redirect {
  FOLLOW = 'follow',
  ERROR = 'error',
  MANUAL = 'manual'
}

export enum Referrer {
  NO_REFERRER = 'no-referrer',
  CLIENT = 'client'
}

export enum ReferrerPolicy {
  NO_REFERRER = 'no-referrer',
  NO_REFERRER_WHEN_DOWNGRADE = 'no-referrer-when-downgrade',
  ORIGIN = 'origin',
  ORIGIN_WHEN_CROSS_ORIGIN = 'origin-when-cross-origin',
  UNSAFE_URL = 'unsafe-url'
}

export enum CredentialsPolicy {
  OMIT = 'omit',
  SAME_ORIGIN = 'same-origin',
  INCLUDE = 'include'
}

export type Authorization = {
  type: AuthorizationType;
  token: string;
};

export type FetchopAttributes = {
  baseUrl?: string | null;
  recurringEndpoints?: string[];
  defaultMethod?: Method;
  authorization?: Authorization;
  timeout?: Timeout;
  retry?: boolean;
  cache?: Cache;
  credentials?: Credentials;
  mode?: Mode;
  redirect?: Redirect;
  referrer?: Referrer;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: any;
  agent?: any;
  credentialsPolicy?: CredentialsPolicy;
};

export interface FetchopAttributesInterface {
  getBaseUrl(): string | null;
  getRecurringEndpoints(): string[];
  getDefaultMethod(): Method;
  getAuthorization(): Authorization;
  getTimeout(): Timeout;
  getRetry(): boolean;
  getCache(): Cache;
  getCredentials(): Credentials;
  getMode(): Mode;
  getRedirect(): Redirect;
  getReferrer(): Referrer;
  getReferrerPolicy(): ReferrerPolicy;
  getIntegrity(): string;
  getKeepalive(): boolean;
  getSignal(): AbortSignal | null;
  getWindow(): any;
  getAgent(): any;
  getCredentialsPolicy(): CredentialsPolicy;
}

export interface FetchopInterface {
  call(url: string, options?: {}): void;
  get(url: string, options?: {}): void;
  post(url: string, options?: {}): void;
  put(url: string, options?: {}): void;
  delete(url: string, options?: {}): void;
  patch(url: string, options?: {}): void;
  recuring(endpoint: string, id?: number, options?: {}): void;
}

export interface HelpersInterface {
  getDefaultsAttributes(): FetchopAttributes;
  getDefaultsMethods(): string[];
}