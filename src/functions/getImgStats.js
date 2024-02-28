export function getImgStatsURL(name) {
    return new URL(`../assets/images/stats/${name}.webp`, import.meta.url) .href
}