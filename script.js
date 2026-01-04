const matches = [
  {
    teams: "Brazil vs Germany",
    date: "12 June 2026",
    venue: "MetLife Stadium"
  },
  {
    teams: "Argentina vs France",
    date: "14 June 2026",
    venue: "SoFi Stadium"
  }
];

const matchSection = document.querySelector(".matches");

matches.forEach(match => {
  const div = document.createElement("div");
  div.className = "match-card";
  div.innerHTML = `
    <p><strong>${match.teams}</strong></p>
    <p>Date: ${match.date}</p>
    <p>Venue: ${match.venue}</p>
  `;
  matchSection.appendChild(div);
});
