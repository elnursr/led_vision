export function SocialNetworkItem({ item: { url, icon, viewBox } } = {}) {
    return (
        `
            <li class="social-network__item">
                <a href="${url}" class="social-network__link">
                    <div class="social-network__icon">
                        <svg viewBox="${viewBox}">
                            <use href="assets/media/svg/icons.svg#icon-${icon}"></use>
                        </svg>
                    </div>
                </a>
            </li>
        `
    )
}