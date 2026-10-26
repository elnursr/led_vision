import { Renderer } from '../renderers/render.js'

import { serviceItems, navigationItems, socialNetworkItem } from '../data/index.js';

import { ServiceItem, NavigationItem, SocialNetworkItem } from '../components/index.js';

import { navigationList, servicesList, socialNetworks } from '../dom/dom-selectors.js';

export default function Layout() { }

Layout.prototype.init = function () {

    const renderer = new Renderer();

    renderer.renderToUI({
        items: navigationItems,
        wrapperElement: navigationList,
        componentElement: NavigationItem
    });

    renderer.renderToUI({
        items: serviceItems,
        wrapperElement: servicesList,
        componentElement: ServiceItem
    });

    renderer.renderToUI({
        items: socialNetworkItem,
        wrapperElement: socialNetworks,
        componentElement: SocialNetworkItem
    });
}