export function ServiceItem({ icon, title, description, viewBox } = {}) {
    return (
        `
            <li class="services__item">
                <div class="services__icon">
                    <svg viewBox="${viewBox}">
                        <use href="assets/media/svg/icons.svg#icon-${icon}"></use>
                    </svg>
                </div>
                <h2 class="services__title">${title}</h2>
                <p class="services__description">${description}</p>
            </li>       
        `
    )
}