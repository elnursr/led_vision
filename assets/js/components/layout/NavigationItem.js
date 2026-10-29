export function NavigationItem({ item: { title, url, isActive } } = {}) {
    let activeClass = isActive ? 'navigation-list__link--active' : null;
    return (
        `
            <li class="navigation-list__item">
                <a href="${url}" class="navigation-list__link ${activeClass}">${title}</a>
            </li>
        `
    )
}