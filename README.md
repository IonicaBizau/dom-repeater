
[![dom-repeater](http://i.imgur.com/T5HouUH.png)](http://ionicabizau.github.io/dom-repeater/example)

# dom-repeater

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/dom-repeater.svg)](https://www.npmjs.com/package/dom-repeater) [![Downloads](https://img.shields.io/npm/dt/dom-repeater.svg)](https://www.npmjs.com/package/dom-repeater)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
