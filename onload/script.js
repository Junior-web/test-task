function customWindowLoad(callback) {
    window.addEventListener('load', callback);
}

customWindowLoad(
    alert('Страница полностью загружена!')
);