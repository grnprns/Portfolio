const siteHeader = document.getElementsByTagName("site-header")[0];
const scrollWatcher = document.createElement("div");
console.log(siteHeader);

scrollWatcher.setAttribute("data-scroll-watcher", "");
siteHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    // 2nd parameter changes how toggle works, if 2nd parameter returns false, toggle can only remove a class and vice versa
    // https://www.youtube.com/watch?v=V-CBdlfCPic&t=315s
    siteHeader.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);