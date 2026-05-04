export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const release = new Date("2026-11-20");
  const daysUntil = Math.round((release - today) / (1000 * 60 * 60 * 24));

  res.json({
    movie: "The Hunger Games: Sunrise on the Reaping",
    date: "2026-11-20",
    daysUntil,
  });
}
