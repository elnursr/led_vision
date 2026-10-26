export function SocialNetworkItem({ url, icon, viewBox } = {}) {
    return (
        `
            <li class="social-networks__item">
                <a href="${url}" class="social-networks__link">
                    <div class="social-networks__icon">
                        <svg viewBox="${viewBox}">
                            <use href="assets/media/svg/icons.svg#icon-${icon}"></use>
                        </svg>
                    </div>
                </a>
            </li>
        `
    )
}