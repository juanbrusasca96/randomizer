const DOTA2 = { image: 'https://cdn-icons-png.flaticon.com/512/871/871366.png', name: 'DOTA 2' }
const LOL = { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png', name: 'League of Legends' }
const JUEGOCONHISTORIA = { image: 'https://cdn-icons-png.flaticon.com/512/5260/5260498.png', name: 'Juego con historia' }
const SERIE = { image: 'https://cdn-icons-png.flaticon.com/512/4236/4236854.png', name: 'Serie' }
const AGE = { image: 'https://aoecompanion.com/img/helmet.svg', name: 'Age of Empires II: Definitive Edition' }
const COUNTER = { name: 'Counter-Strike: Global Offensive' }

export const queHacerList = [LOL, DOTA2, AGE, JUEGOCONHISTORIA, SERIE]

export const queHacerListDropActivo = [LOL, DOTA2, AGE, JUEGOCONHISTORIA, SERIE, COUNTER]

export const agePossibilities = ['Online', 'Historia']

export function calcularWinRate(pick, win) {
    let winRate = win * 100 / pick
    return winRate.toFixed(2)
}

export const offLane = ['Abaddon', 'Bristleback', 'Chaos Knight', 'Dark Seer', 'Dawnbreaker', 'Death Prophet', 'Doom', 'Dragon Knight', 'Elder Titan', 'Kunkka', 'Magnus', 'Mars', 'Necrophos', 'Night Stalker', 'Ogre Magi', 'Omniknight', 'Primal Beast', 'Razor', 'Slardar', 'Tidehunter', 'Timbersaw', 'Underlord', 'Viper', 'Wraith King']

export const softSupport = ['Ancient Apparition', 'Bane', 'Bounty Hunter', 'Clockwerk', 'Dark Willow', 'Earthshaker', 'Enchantress', 'Grimstroke', 'Gyrocopter', 'Hoodwink', 'Jakiro', 'Keeper of the Light', 'Mirana', 'Phoenix', 'Pugna', 'Rubick', 'Shadow Demon', 'Silencer', 'Skywrath Mage', 'Snapfire', 'Treant Protector', 'Tusk', 'Undying', 'Vengeful Spirit', 'Venomancer']

export const hardSupport = ['Ancient Apparition', 'Bane', 'Crystal Maiden', 'Dark Willow', 'Dazzle', 'Disruptor', 'Enchantress', 'Grimstroke', 'Hoodwink', 'Jakiro', 'Keeper of the Light', 'Lich', 'Ogre Magi', 'Pugna', 'Rubick', 'Shadow Demon', 'Silencer', 'Skywrath Mage', 'Snapfire', 'Treant Protector', 'Undying', 'Vengeful Spirit', 'Venomancer', 'Winter Wyvern', 'Witch Doctor']

export const lolPositions = ['Top', 'Support']

export const topChampions = ['Camille', 'Illaoi', 'Urgot']

export const suppChampions = ['Swain', 'Poppy', 'Pantheon']

export function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}