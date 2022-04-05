const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
        header.setAttribute("style", "background: #070707; transition: 0.5s;");
    } else {
        
    header.setAttribute("style", "background: transparent; transition: 0.5s");
    }
    });