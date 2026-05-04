// Scriptable Widget — Days Until Hunger Games
const API_URL = "https://days-until-date.vercel.app/api/events";

async function fetchData() {
  const req = new Request(API_URL);
  return await req.loadJSON();
}

async function createWidget(data) {
  const widget = new ListWidget();

  // Background gradient
  const gradient = new LinearGradient();
  gradient.colors = [new Color("#1a0a00"), new Color("#3d1a00")];
  gradient.locations = [0, 1];
  widget.backgroundGradient = gradient;
  widget.setPadding(16, 16, 16, 16);

  // Days number
  const daysText = widget.addText(String(data.daysUntil));
  daysText.textColor = new Color("#e8a020");
  daysText.font = Font.boldSystemFont(52);
  daysText.minimumScaleFactor = 0.5;

  // "DAYS UNTIL" label
  const label = widget.addText("DAYS UNTIL");
  label.textColor = new Color("#ffffff88");
  label.font = Font.boldSystemFont(11);

  widget.addSpacer(6);

  // Movie name
  const movie = widget.addText(data.movie);
  movie.textColor = new Color("#ffffff");
  movie.font = Font.mediumSystemFont(11);
  movie.minimumScaleFactor = 0.6;

  // Release date
  widget.addSpacer(4);
  const date = widget.addText(data.date);
  date.textColor = new Color("#ffffff55");
  date.font = Font.systemFont(9);

  return widget;
}

// --- Run ---
const data = await fetchData();
const widget = await createWidget(data);

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentSmall();
}

Script.complete();
