export function FooterNavigationItem({ item: { url, title } } = {}) {
    return (
        `
            <li class="footer-navigation__item">
                <a href="${url}" class="footer-navigation__link">${title}</a>
            </li>
        `
    )
}