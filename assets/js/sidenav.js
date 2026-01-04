
document.addEventListener("DOMContentLoaded", function () {
    const tocList = document.getElementById("toc-list");
    const contentArea = document.querySelector(".main-content");
    if (!tocList || !contentArea) return;

    const headings = contentArea.querySelectorAll("h1, h2");
    const headingMap = [];

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "") + "-" + index;
        }

        const li = document.createElement("li");
        li.style.marginLeft = heading.tagName === "H2" ? "1em" : "0";
        const a = document.createElement("a");
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        a.classList.add("toc-link");
        li.appendChild(a);
        tocList.appendChild(li);

        headingMap.push({
            id: heading.id,
            offsetTop: heading.offsetTop
        });
    });

    function onScroll() {
        let current = "";
        for (let i = 0; i < headingMap.length; i++) {
            const heading = document.getElementById(headingMap[i].id);
            if (heading.getBoundingClientRect().top <= 80) {
                current = headingMap[i].id;
            }
        }

        document.querySelectorAll(".toc-link").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});
