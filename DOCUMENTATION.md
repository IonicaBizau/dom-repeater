## Documentation

You can see below the API reference of this module.

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

