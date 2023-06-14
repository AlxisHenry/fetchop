# Usage

::: tip
Fetchop has different ways to make requests, please take a look the entire documentation to know all the ways to make requests.
:::

## Passing configuration

You can pass a configuration object to the constructor of Fetchop.

```ts {4,5}
import { Fetchop } from 'fetchop';

new Fetchop({
	defaultMethod: 'POST', // All requests will be POST by default
	baseUrl: 'https://example.com'
})
```
## Simple request

:::warning
You can use the `call` method to make a simple request without instancing Fetchop, but you will not be able to use the other methods.
:::

To make a simple request, you can use the `call` method.

```ts {3}
import { Fetchop } from 'fetchop';
const fetch = new Fetchop();
const response = await fetch.call('https://example.com');
```

```ts
import { Fetchop } from 'fetchop';
Fetchop.call('POST::https://example.com', {
	body: {
		foo: 'bar'
	}
});
```

## Recurrent endpoints

:::warning
To use this feature, you need first to set the `baseUrl` attribute. Please take a look at the [Attributes](/guide/configuration/attributes.md) guide to know how to set it.
:::

You can set recurrent endpoints to make requests to the same endpoint without passing the URL.

```ts {3}
import { Fetchop } from 'fetchop';

const fetch = new Fetchop({
	baseUrl: 'https://example.com',
	recurrentEndpoints: [
		'GET::/users',
		'POST::/comments'
	]
});

const users = await fetch.recurrent('/users');
```
