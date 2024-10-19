export const createElement = (tag, className, innerHtml, attributes) => {
    const element = document.createElement(tag);
    
    if (className) {
        element.className = className;
    }
    if (innerHtml) {
        element.innerHTML = innerHtml;
    }
    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        })
    }

    return element;
};