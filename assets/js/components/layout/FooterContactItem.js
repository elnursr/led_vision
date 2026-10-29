export function FooterContactItem({ item: { url, label, value } } = {}) {
    return (
        `
            <li class="footer-contact__item">
                <span class="footer-contact__label">${label}: </span>
                <a href="${url}" class="footer-contact__link" target="_blank">${value}</a>
            </li>
        `
    )
}