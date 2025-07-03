// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for nav links
  document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Toggle dark mode
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙 Toggle Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.zIndex = "1000";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.background = "#222";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.border = "none";
  toggleBtn.style.cursor = "pointer";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // Collapse/expand members list
  const membersSection = document.getElementById("members");
  if (membersSection) {
    const membersList = membersSection.querySelector("ul");
    const toggleMembersBtn = document.createElement("button");
    toggleMembersBtn.textContent = "Show/Hide Members";
    toggleMembersBtn.style.marginBottom = "10px";
    toggleMembersBtn.style.padding = "8px";
    toggleMembersBtn.style.background = "#333";
    toggleMembersBtn.style.color = "#fff";
    toggleMembersBtn.style.border = "none";
    toggleMembersBtn.style.cursor = "pointer";
    membersSection.insertBefore(toggleMembersBtn, membersList);

    toggleMembersBtn.addEventListener("click", () => {
      membersList.style.display = membersList.style.display === "none" ? "block" : "none";
    });
  }

  // Scroll to contact when "Apply below" is clicked
  const applyLink = document.querySelector("#join a[href='#contact']");
  if (applyLink) {
    applyLink.addEventListener("click", function (e) {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
