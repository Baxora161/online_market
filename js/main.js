import { setupThemeToggle } from "./theme.js";
import { loadProducts } from "./products.js";

setupThemeToggle();
loadProducts();

const loginBtn = document.querySelector(".svg-login");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        window.location.href = loginBtn.dataset.href;
    });
}