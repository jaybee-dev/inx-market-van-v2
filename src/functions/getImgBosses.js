export function getImgBossesURL(name) {
    return new URL(`../assets/images/bosses/${name}.webp`, import.meta.url) .href
}