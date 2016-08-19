"use strict";

const renderer = require("mustache")
    , $ = require("elly")
    , $$ = $.$$
    , typpy = require("typpy")
    ;

class DOMRepeater {
    constructor (container, item) {
        this.container = $(container);
        this.item = item || $("[data-repeater='item']", this.container);
    }

    renderItem (cData, index) {
        cData.__index = index;
        return DOMRepeater.renderer.render(this.item.outerHTML, cData);
    }

    render (data) {
        this.container.innerHTML = data.map((c, i) => this.renderItem(c, i)).join("");
    }
}
DOMRepeater.renderer = renderer;

/**
 * domRepeater
 * Render lists in DOM easily.
 *
 * @name domRepeater
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
function domRepeater (sel, data) {
    if (typpy(sel, Array)) {
        data = sel;
        sel = null;
    }
    sel = sel || "[data-repeater='container']";
    $$(sel).forEach($c => {
        new DOMRepeater($c).render(data);
    });
}

domRepeater.DOMRepeater = DOMRepeater;
module.exports = domRepeater;
