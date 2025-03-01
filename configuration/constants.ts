export const DAILY_TIPS: string[] = [
  "🔥 *Career Tip:* 'Start networking early, but don’t just collect coffee chats—build real relationships!' – [2Y MBA]",
  "📚 *Academics Hack:* 'If a class is heavy on cases, form a study group early. Trust me, it saves time.' – [KFBS Alum]",
  "💼 *Internship Advice:* 'Treat recruiting like a marathon, not a sprint. Stay consistent and don’t compare your timeline to others.' – [Recent Grad]",
  "☕ *Chapel Hill Tip:* 'Best quiet Bagel shop in Chapel Hill? Try Brandwein's Bagels.' – [2Y MBA]",
  "🎶 *De-Stress Playlist:* 'Feeling overwhelmed? Lo-fi beats or Afrobeats can help you refocus.' – [KFBS Student]",
];

export function getDailyTip() {
  const tip = DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];
  return `Your MBA Tip of the Day': ${tip}`;
}
