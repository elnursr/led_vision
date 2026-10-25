export function Renderer() {

}

Renderer.prototype.renderToUI = function ({ items, wrapperElement, componentElement } = {}) {
    let renderHTML = '';

    for (let i = 0; i < items.length; i++) {
        renderHTML += componentElement(items[i]);
    }

    wrapperElement.innerHTML = renderHTML;
}