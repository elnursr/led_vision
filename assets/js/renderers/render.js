export function Renderer() {

}

Renderer.prototype.renderToUI = function ({ items, wrapperElement, componentElement } = {}) {
    let renderHTML = '';

    for (let i = 0; i < items.length; i++) {
        renderHTML += componentElement({ item: items[i], index: i });
    }

    wrapperElement.innerHTML = renderHTML;
}