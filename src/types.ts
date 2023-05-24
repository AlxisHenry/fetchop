import { Fetchop } from './Fetchop';
import Helpers from './Helpers';

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
  type: string;
  token?: string;
};

export type FetchopAttributes = {
  baseUrl?: string | null;
  recurrentEndpoints?: string[];
  defaultMethod?: string;
  authorization?: Authorization;
  timeout?: number;
  retry?: boolean;
  cache?: string;
  credentials?: string;
  mode?: string;
  redirect?: string;
  referrer?: string;
  referrerPolicy?: string;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: any;
  agent?: any;
  credentialsPolicy?: string;
};

export type HelperObject = {
  [key: string]: any | { value: any; type?: string; different?: boolean };
};

export type HelperCompareObject = { [key: string]: boolean };

export type AttributeMethods = {
  getter: string;
  setter: string;
};

export interface FetchopAttributesInterface {
  getBaseUrl(): string | null;
  getRecurrentEndpoints(): string[];
  getDefaultMethod(): string;
  getAuthorization(): Authorization;
  getTimeout(): number;
  getRetry(): boolean;
  getCache(): string;
  getCredentials(): string;
  getMode(): string;
  getRedirect(): string;
  getReferrer(): string;
  getReferrerPolicy(): string;
  getIntegrity(): string;
  getKeepalive(): boolean;
  getSignal(): AbortSignal | null;
  getWindow(): any;
  getAgent(): any;
  getCredentialsPolicy(): string;
}

export interface FetchopInterface {
  [key: string]: Function | any;
  call(url: string, options?: {}): void;
  get(url: string, options?: {}): void;
  post(url: string, options?: {}): void;
  put(url: string, options?: {}): void;
  delete(url: string, options?: {}): void;
  patch(url: string, options?: {}): void;
  recurrent(endpoint: string, id?: number, options?: {}): void;
  helpers(): Helpers;
}

export interface HelpersInterface {
  getDefaultAttributes(): FetchopAttributes;
  compareCurrentToDefault(): HelperCompareObject;
  getAllowedMethods(): string[] | HelperObject;
  getCurrentAttributes(): HelperObject;
}
