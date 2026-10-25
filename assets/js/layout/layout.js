import { Renderer } from '../renderers/render.js'
import { navigationList } from '../dom/dom-selectors.js';
import { NavigationItem } from '../components/layout/NavigationItem.js';

import navigationItems from '../data/navigationItems.js';

export default function Layout() { }

Layout.prototype.init = function () {

    const renderer = new Renderer();

    renderer.renderToUI({
        items: navigationItems,
        wrapperElement: navigationList,
        componentElement: NavigationItem
    });
}