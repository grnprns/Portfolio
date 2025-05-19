document.querySelectorAll('#projects a h2, #projects a h3').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.removeProperty('color');
    });
});