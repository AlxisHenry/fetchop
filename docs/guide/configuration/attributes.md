# Attributes

::: tip
You can configure Fetchop with passing an object with the attributes you want to configure to the constructor.
:::

## Allowed attributes

Below is a list of all the attributes you can configure in Fetchop.

```ts
type FetchopAttributes = {
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
  body?: string | object;
  contentTypes?: string[];
  accept?: string;
};
```