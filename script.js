const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


const targets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

targets.forEach(target => observer.observe(target));



const newsList = document.getElementById("news-list");

if (newsList && typeof newsData !== "undefined") {
  newsData.forEach(item => {
    const li = document.createElement("li");
    li.className = "news-item";

    li.innerHTML = `
      <time class="news-date">${item.date}</time>
      <div class="news-content">
        <p>
          ${item.link
            ? `<a href="${item.link}">${item.text}</a>`
            : item.text}
        </p>
      </div>
    `;

    newsList.appendChild(li);
  });
};
