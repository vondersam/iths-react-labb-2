export function calculateStats(websiteList) {
  let [energy, co2] = [0, 0];
  for (let website of websiteList) {
    energy += website.statistics.energy;
    co2 += website.statistics.co2.grid.grams;
  }
  return [energy, co2];
}
