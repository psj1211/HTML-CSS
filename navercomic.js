function initTabs(container) {
    const tabs = container.querySelectorAll('.tab');
    const select = (target) => {
        tabs.forEach((tab) => {
            const isActive = tab === target;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });
    };

    container.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab');
        if (tab && container.contains(tab)) select(tab);
    });
    const initial = container.dataset.initial;
    if (initial !== undefined && tabs[initial]) select(tabs[initial]);
}

document.querySelectorAll('[data-tabs]').forEach(initTabs);
