import { Fetchop } from "../src/Fetchop";
import { FetchopAttributes } from "../src/types";

let defaultConfiguration: FetchopAttributes = {
	baseUrl: null,
	recurrentEndpoints: [],
	defaultMethod: 'GET',
	authorization: { type: 'Bearer', token: '' },
	timeout: 3000,
	retry: false,
	cache: 'default',
	credentials: 'omit',
	mode: 'same-origin',
	redirect: 'follow',
	referrer: 'client',
	referrerPolicy: 'no-referrer-when-downgrade',
	integrity: '',
	keepalive: false,
	signal: null,
	window: null,
	agent: null,
	credentialsPolicy: 'omit'
}

describe('Fetchop', () => {
	it('should be able to set a custom configuration', () => {
		let config: FetchopAttributes = {
			...Fetchop.helpers().getDefaultAttributes(true),
			baseUrl: 'https://api.github.com',
		}
		let fetchop = new Fetchop(config);
		expect(fetchop.getBaseUrl()).toStrictEqual(config.baseUrl);
	});
	it('sould be able to get the current configuration', () => {
		let config = {
			...defaultConfiguration,
			baseUrl: 'https://api.github.com'
		}
		let fetchop = new Fetchop(config);
		expect(fetchop.helpers().getCurrentAttributes(true)).toStrictEqual(config);
	});
	it('should be able to get the default configuration', () => {
		let fetchop = new Fetchop();
		expect(fetchop.helpers().getDefaultAttributes(true)).toBeInstanceOf(Object);
		expect(fetchop.helpers().getDefaultAttributes(true)).toStrictEqual(defaultConfiguration);
	});
	it('should be able to use getters', () => {
		let fetchop = new Fetchop();
		expect(fetchop.getBaseUrl()).toBe(null);
		expect(fetchop.getRecurrentEndpoints()).toBeInstanceOf(Array);
		expect(fetchop.getRecurrentEndpoints()).toStrictEqual([]);
		expect(fetchop.getDefaultMethod()).toBe('GET');
		expect(fetchop.getAuthorization()).toBeInstanceOf(Object);
		expect(fetchop.getAuthorization()).toStrictEqual({ type: 'Bearer', token: '' });
		expect(fetchop.getTimeout()).toBe(3000);
		expect(fetchop.getRetry()).toBe(false);
		expect(fetchop.getCache()).toBe('default');
		expect(fetchop.getCredentials()).toBe('omit');
		expect(fetchop.getMode()).toBe('same-origin');
		expect(fetchop.getRedirect()).toBe('follow');
		expect(fetchop.getReferrer()).toBe('client');
		expect(fetchop.getReferrerPolicy()).toBe('no-referrer-when-downgrade');
		expect(fetchop.getIntegrity()).toBe('');
		expect(fetchop.getKeepalive()).toBe(false);
		expect(fetchop.getSignal()).toBe(null);
		expect(fetchop.getWindow()).toBe(null);
		expect(fetchop.getAgent()).toBe(null);
		expect(fetchop.getCredentialsPolicy()).toBe('omit');
	});
	describe('Incorrect configuration', () => {
		it('should throw an error when baseUrl is not defined but recurrentEndpoints is defined', () => {
			expect(() => new Fetchop({
				recurrentEndpoints: ['GET::/posts']
			})).toThrowError('You must set the baseUrl attribute to use the recurrent endpoints feature.');
		});
		it('should throw an error when defaultMethod is not allowed', () => {
			expect(() => new Fetchop({
				defaultMethod: 'INVALID_METHOD'
			})).toThrowError('The given method is not allowed. Allowed method(s): GET,POST,PUT,DELETE,PATCH');
		});
		it('should throw an error when authorization type is not allowed', () => {
			expect(() => new Fetchop({
				authorization: {
					type: 'INVALID_TYPE'
				}
			})).toThrowError('The given authorization type is not allowed. Allowed authorization type(s): Bearer,Basic,Digest');
		});
		it('should throw an error when cache is not allowed', () => {
			expect(() => new Fetchop({
				cache: 'INVALID_CACHE'
			})).toThrowError('The given cache is not allowed. Allowed cache(s): default,reload,no-cache');
		});
		it('should throw an error when credentials is not allowed', () => {
			expect(() => new Fetchop({
				credentials: 'INVALID_CREDENTIALS'
			})).toThrowError('The given credentials is not allowed. Allowed credentials(s): omit,same-origin,include');
		});
		it('should throw an error when mode is not allowed', () => {
			expect(() => new Fetchop({
				mode: 'INVALID_MODE'
			})).toThrowError('The given mode is not allowed. Allowed mode(s): same-origin,no-cors,cors');
		});
		it('should throw an error when redirect is not allowed', () => {
			expect(() => new Fetchop({
				redirect: 'INVALID_REDIRECT'
			})).toThrowError('The given redirect is not allowed. Allowed redirect(s): follow,error,manual');
		});
		it('should throw an error when referrer is not allowed', () => {
			expect(() => new Fetchop({
				referrer: 'INVALID_REFERRER'
			})).toThrowError('The given referrer is not allowed. Allowed referrer(s): no-referrer,client');
		});
		it('should throw an error when referrerPolicy is not allowed', () => {
			expect(() => new Fetchop({
				referrerPolicy: 'INVALID_REFERRER_POLICY'
			})).toThrowError('The given referrerPolicy is not allowed. Allowed referrerPolicy(s): no-referrer,no-referrer-when-downgrade,origin,origin-when-cross-origin,unsafe-url');
		});
		it('should throw an error when credentialsPolicy is not allowed', () => {
			expect(() => new Fetchop({
				credentialsPolicy: 'INVALID_CREDENTIALS_POLICY'
			})).toThrowError('The given credentialsPolicy is not allowed. Allowed credentialsPolicy(s): omit,same-origin,include');
		});
	});
})	