import { Renderer } from '../renderers/render.js'

import { serviceItems, navigationItems, footerContactItems, socialNetworkItems } from '../data/index.js';

import { ServiceItem, NavigationItem, FooterNavigationItem, FooterContactItem, SocialNetworkItem } from '../components/index.js';

import { serviceList, navigationList, footerNavigationList, footerContactList, socialNetwork } from '../dom/dom-selectors.js';

export default function Layout() { }

Layout.prototype.init = function () {

    const renderer = new Renderer();

    renderer.renderToUI({
        items: navigationItems,
        wrapperElement: navigationList,
        componentElement: NavigationItem
    });

    renderer.renderToUI({
        items: navigationItems,
        wrapperElement: footerNavigationList,
        componentElement: FooterNavigationItem
    });

    renderer.renderToUI({
        items: footerContactItems,
        wrapperElement: footerContactList,
        componentElement: FooterContactItem
    });

    renderer.renderToUI({
        items: serviceItems,
        wrapperElement: serviceList,
        componentElement: ServiceItem
    });

    renderer.renderToUI({
        items: socialNetworkItems,
        wrapperElement: socialNetwork,
        componentElement: SocialNetworkItem
    });
}