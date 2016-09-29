"use strict";

const renderer = require("mustache")
    , $ = require("elly")
    , $$ = $.$$
    , typpy = require("typpy")
    ;

class DOMRepeater {

    /**
     * DOMRepeater
     * Creates a new `DOMRepeater`.
     *
     * The `DOMRepeater.renderer` is an object containing the `render` function.
     * You can override the `renderer` object with a different renderer. By default, `mustache` is used.
     *
     * @name DOMRepeater
     * @function
     * @param {HTMLElement|String} container The HTML Element or the selector as a string.
     * @param {HTMLElement|String} item The HTML Element to use as template or the selector (default: the element with `data-repeater='item'` attribute in the container).
     * @returns {DOMRepeater} The `DOMRepeater` instance.
     */
    constructor (container, item) {
        this.container = $(container);
        this.item = item || $("[data-repeater='item']", this.container);
    }

    /**
     * renderItem
     * Renders one item.
     *
     * @name renderItem
     * @function
     * @param {Object} cData The data to render.
     * @param {Number} index The current index.
     * @returns {String} The rendered HTML as string.
     */
    renderItem (cData, index) {
        cData.__index = index;
        return DOMRepeater.renderer.render(this.item.outerHTML, cData);
    }

    /**
     * render
     * Renders the data array.
     *
     * @name render
     * @function
     * @param {Array} data The data to render (an array of objects).
     */
    render (data) {
        this.container.innerHTML = data.map((c, i) => this.renderItem(c, i)).join("");
    }
}

DOMRepeater.renderer = renderer;

/**
 * domRepeater
 * Render the lists in the selected containers.
 *
 * **Note**: `domRepeater.DOMRepeater` contains the `DOMRepeater` class.
 *
 * Usage:
 *
 * ```js
 * // Render these three items in all the [data-repeater='container'] from the page.
 * domRepeater([
 *  { text: "item 1" },
 *  { text: "item 2" },
 *  { text: "item 3" }
 * ]);
 *
 * // Render these three items in all the .my-selector elements from the page.
 * domRepeater(".my-selector", [
 *  { text: "item 1" },
 *  { text: "item 2" },
 *  { text: "item 3" }
 * ]);
 * ```
 *
 * @name domRepeater
 * @function
 * @param {HTMLElement|String} sel The selector or HTML element.
 * @param {Array} data The data array.
 */
function domRepeater (sel, data) {

    let selector = sel;
    let item = null;

    if (typpy(sel, Array)) {
        data = sel;
        sel = null;
    } else if (typpy(sel, Object)) {
        item = sel.item;
        selector = sel.selector;
    }

    selector = selector || "[data-repeater='container']";

    $$(sel).forEach($c => {
        new DOMRepeater($c).render(data);
    });
}

domRepeater.DOMRepeater = DOMRepeater;
module.exports = domRepeater;
