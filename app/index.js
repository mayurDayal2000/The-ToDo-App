(() => {
    const t = document.querySelector(".add"),
        e = document.querySelector("ul");
    document.querySelectorAll("form").forEach((t) => {
        t.addEventListener("submit", (t) => {
            t.preventDefault();
        });
    }),
        t.addEventListener("submit", () => {
            let r = t.add.value.trim();
            r.length &&
                (((t) => {
                    const r = `\n    <li>\n        <span>${t}</span>\n        <div class="icons">\n            <i class="fas fa-minus-circle icon minus" title="Remove the task"></i>\n            <i class="far fa-star icon important" title="Important stuff"></i>\n        </div>\n    </li> `;
                    e.innerHTML += r;
                })(r),
                    t.reset());
        }),
        e.addEventListener("click", (t) => {
            t.target.classList.contains("minus") &&
                confirm("Do you want to remove the task from the list?") &&
                t.target.parentNode.parentNode.remove();
        }),
        e.addEventListener("click", (t) => {
            t.target.classList.contains("important") &&
                (t.target.classList.toggle("fas"),
                    t.target.classList.toggle("priority"));
        });
    const r = document.querySelector(".search input");
    r.addEventListener("keyup", () => {
        const t = r.value.trim().toLowerCase();
        var n;
        (n = t),
            Array.from(e.children)
                .filter((t) => !t.textContent.toLowerCase().includes(n))
                .forEach((t) => {
                    t.classList.add("filtered");
                }),
            Array.from(e.children)
                .filter((t) => t.textContent.toLowerCase().includes(n))
                .forEach((t) => {
                    t.classList.remove("filtered");
                });
    });
})();
