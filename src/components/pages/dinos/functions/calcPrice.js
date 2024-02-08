export function calcPrice (n, stat1, stat2, stat3, stat4) {
    const result = Math.round(
        (n * (Math.round(stat1) / 80) +
          n * (Math.round(stat2) / 80) * 0.7 +
          n * (Math.round(stat3) / 80) * 0.4 +
          n * (Math.round(stat4) / 80) * 0.3) /
          100
      ) * 100
      return result
}