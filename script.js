// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark mode toggle
const darkToggle = document.createElement("button");
darkToggle.textContent = "🌙 Toggle Dark Mode";
darkToggle.style.position = "fixed";
darkToggle.style.bottom = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "10px";
darkToggle.style.background = "#222";
darkToggle.style.color = "#fff";
darkToggle.style.border = "none";
darkToggle.style.cursor = "pointer";
document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Collapse/expand members list
const membersSection = document.querySelector("#members");
const membersList = membersSection.querySelector("ul");

const toggleButton = document.createElement("button");
toggleButton.textContent = "Show/Hide Members";
toggleButton.style.margin = "10px 0";
toggleButton.style.padding = "6px";
toggleButton.style.background = "#333";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
membersSection.insertBefore(toggleButton, membersList);

toggleButton.addEventListener("click", () => {
  membersList.style.display = membersList.style.display === "none" ? "block" : "none";
});

// "Apply Now" click scroll
const joinSection = document.querySelector("#join");
const applyLink = joinSection.querySelector("a[href='#contact']");

applyLink.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
