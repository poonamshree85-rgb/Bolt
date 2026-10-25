const toast = document.querySelector('#toast');
const viewTitle = document.querySelector('#view-title');
const cards = [...document.querySelectorAll('.content-card')];
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('is-visible'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600); }
document.querySelectorAll('.nav-item').forEach((item) => { item.addEventListener('click', () => { document.querySelector('.nav-item.is-active')?.classList.remove('is-active'); item.classList.add('is-active'); const view = item.dataset.view; viewTitle.textContent = view === 'home' ? 'Welcome back, Steve.' : `${item.textContent.trim()} is ready.`; if (view !== 'home') showToast(`${item.textContent.trim()} view selected`); }); });
document.querySelector('#search').addEventListener('input', (event) => { const query = event.target.value.trim().toLowerCase(); cards.forEach((card) => { card.hidden = !`${card.dataset.name} ${card.dataset.detail}`.toLowerCase().includes(query); }); });
cards.forEach((card) => card.addEventListener('click', () => showToast(`${card.dataset.name} opened`)));
document.querySelector('[data-action="play"]').addEventListener('click', () => showToast('Starting Minecraft Java 1.21.4'));
document.querySelector('[data-action="manage"]').addEventListener('click', () => showToast('Profile manager opened'));
document.querySelector('.icon-button').addEventListener('click', () => showToast('No new notifications'));
document.querySelector('.text-button').addEventListener('click', () => showToast('Help center opened'));
