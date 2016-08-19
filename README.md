
# dom-repeater

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/dom-repeater.svg)](https://www.npmjs.com/package/dom-repeater) [![Downloads](https://img.shields.io/npm/dt/dom-repeater.svg)](https://www.npmjs.com/package/dom-repeater) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Render lists in DOM easily.

## :cloud: Installation


Check out the [`dist`](/dist) directory to download the needed files and include them on your page.

If you're using this module in a CommonJS environment, you can install it from `npm` and `require` it:

```sh
$ npm i --save dom-repeater
```


## :clipboard: Example



```js
domRepeater([
    { value: 0, text: "apple" }
  , { value: 1, text: "pear" }
  , { value: 2, text: "orange" }
  , { value: 3, text: "lemon" }
]);
```

## :memo: Documentation


### `DOMRepeater(container, item)`
Creates a new `DOMRepeater`.

The `DOMRepeater.renderer` is an object containing the `render` function.
You can override the `renderer` object with a different renderer. By default, `mustache` is used.

#### Params
- **HTMLElement|String** `container`: The HTML Element or the selector as a string.
- **HTMLElement|String** `item`: The HTML Element to use as template or the selector (default: the element with `data-repeater='item'` attribute in the container).

#### Return
- **DOMRepeater** The `DOMRepeater` instance.

### `renderItem(cData, index)`
Renders one item.

#### Params
- **Object** `cData`: The data to render.
- **Number** `index`: The current index.

#### Return
- **String** The rendered HTML as string.

### `render(data)`
Renders the data array.

#### Params
- **Array** `data`: The data to render (an array of objects).

### `domRepeater(sel, data)`
Render the lists in the selected containers.

**Note**: `domRepeater.DOMRepeater` contains the `DOMRepeater` class.

Usage:

```js
// Render these three items in all the [data-repeater='container'] from the page.
domRepeater([
 { text: "item 1" },
 { text: "item 2" },
 { text: "item 3" }
]);

// Render these three items in all the .my-selector elements from the page.
domRepeater(".my-selector", [
 { text: "item 1" },
 { text: "item 2" },
 { text: "item 3" }
]);
```

#### Params
- **HTMLElement|String** `sel`: The selector or HTML element.
- **Array** `data`: The data array.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
