import { Fetchop } from '../../src/Fetchop';

describe('Recurring Endpoints', () => {
	it('should throw an error if the baseUrl attribute is not set', () => {
		expect(() => {
			new Fetchop({
				recurrentEndpoints: ["GET::/posts"]
			})
		}).toThrowError('You must set the baseUrl attribute to use the recurrent endpoints feature.');
	});
	it('should throw an error if the recurrent endpoint doesn\'t match the pattern.', () => {
		expect(() => {
			new Fetchop({
				baseUrl: 'https://jsonplaceholder.typicode.com',
				recurrentEndpoints: ["GET:/posts/:id/comments"]
			})
		}).toThrowError('Every items of the array must be a string and follow the pattern (METHOD::/endpoint).');
	});
	it('should create recurrent endpoints with one slash.', () => {
		let recurrentEndpoints = ['GET::/posts'];
		let fetch = new Fetchop({
			baseUrl: 'https://jsonplaceholder.typicode.com',
			recurrentEndpoints: recurrentEndpoints
		})
		expect(fetch.getRecurrentEndpoints()).toEqual(recurrentEndpoints);
	});
	it('should create recurrent endpoints with two slashes.', () => {
		let recurrentEndpoints = ['GET::/posts/:id'];
		let fetch = new Fetchop({
			baseUrl: 'https://jsonplaceholder.typicode.com',
			recurrentEndpoints: recurrentEndpoints
		})
		expect(fetch.getRecurrentEndpoints()).toEqual(recurrentEndpoints);
	});
	it('should create recurrent endpoints with more than two slashes.', () => {
		let recurrentEndpoints = ['GET::/posts/:id/comments'];
		let fetch = new Fetchop({
			baseUrl: 'https://jsonplaceholder.typicode.com',
			recurrentEndpoints: recurrentEndpoints
		})
		expect(fetch.getRecurrentEndpoints()).toEqual(recurrentEndpoints);
	});
	test('need the recurrent endpoints are matching the pattern.', () => {
		let recurrentEndpoints = [
			"GET::/posts",
			"POST::/posts/:id",
			"GET::/posts/:id/comments",
		];
		let pattern = Fetchop.getRecurrentEndpointRegex();
		recurrentEndpoints.forEach((endpoint) => {
			expect(pattern.test(endpoint)).toBe(true);
		});
	});
	it('should create all given recurrent endpoints if they are matching the pattern.', () => {
		let recurrentEndpoints = [
			'GET::/posts',
			'POST::/posts/:id',
			'GET::/posts/:id/comments',
		];
		let fetch = new Fetchop({
			baseUrl: 'https://jsonplaceholder.typicode.com',
			recurrentEndpoints: recurrentEndpoints
		})
		expect(fetch.getRecurrentEndpoints()).toEqual(recurrentEndpoints);
	});
	it('should be called using the recurrent method.', () => {
		let fetch = new Fetchop({
			baseUrl: 'https://jsonplaceholder.typicode.com',
			recurrentEndpoints: ["GET::/posts"]
		});
		let response = fetch.recurrent('/posts');
	});
});