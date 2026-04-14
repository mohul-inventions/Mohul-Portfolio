const projects = [
    "SIH (Smart India Hackathon)",
    "Ideathon Project",
    "AI Based Smart Traffic System",
    "Mini College Website",
    "Student Grading System",
    "IIT Madras Road Safety Hackathon (Upcoming)",
    "NIT Trichy Vortex Hackathon (Upcoming)",
    "IIT Mandi Hackathon (Upcoming)",
    "GitHub Hackathon (Upcoming)",
    "Open Source Contribution Projects",
    "Personal Portfolio Website"
];

const container = document.getElementById("projectList");

projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `<p>${p}</p>`;
    container.appendChild(div);
});