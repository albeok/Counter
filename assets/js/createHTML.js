export const createElement = (tag, id, className, name, value, content) => {
    const el = document.createElement(tag);
    el.id = id;
    el.className = className;
    el.name = name;
    el.value = value;
    el.innerHTML = content;
    return el;
}