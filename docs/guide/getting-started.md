# Getting Started

::: warning
This guide assumes you already have a basic understanding of javascript and the Fetch API.
:::

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- [npm](https://www.npmjs.com/) version 7 or higher, or [pnpm](https://pnpm.io/) version 6 or higher.

::: code-group

```sh [npm]
$ npm install -D fetchop
```

```sh [pnpm]
$ pnpm add -D fetchop
```

:::

## Usage

### Basic usage

You can import the library in your project like this:

```js
import { Fetchop } from 'fetchop'
```

Then you can create a new instance of Fetchop like this:

```js
const fetchop = new Fetchop()
```