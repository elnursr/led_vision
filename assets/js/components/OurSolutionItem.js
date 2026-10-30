export function OurSolutionItem({ item: { icon, viewBox, title, description }, index } = {}) {
    return (
        `
            <li class="our-solution__item">
                <div class="our-solution__meta">
                    <div class="our-solution__meta-icon">
                        <svg viewBox="${viewBox}">
                            <use href="assets/media/svg/icons.svg#icon-${icon}"></use>
                        </svg>
                    </div>
                    <span class="our-solution__rank">0${index + 1}</span>
                </div>
                <div class="our-solution__content">
                    <h1 class="our-solution__title">${title}</h1>
                    <p class="our-solution__description">${description}</p>
                </div>
                <a href="" class="our-solution__link">
                    Read More
                    <div class="our-solution__link-icon">
                        <svg viewBox="0 0 24 24">
                            <use href="assets/media/svg/icons.svg#icon-arrow-right"></use>
                        </svg>
                    </div>
                </a>
            </li>
        `
    )
}