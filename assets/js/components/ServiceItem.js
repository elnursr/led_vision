export function ServiceItem({ item: { icon, title, description, viewBox } } = {}) {
    return (
        `
            <li class="service__item">
                <div class="service__icon">
                    <svg viewBox="${viewBox}">
                        <use href="assets/media/svg/icons.svg#icon-${icon}"></use>
                    </svg>
                </div>
                <h2 class="service__title">${title}</h2>
                <p class="service__description">${description}</p>
            </li>       
        `
    )
}