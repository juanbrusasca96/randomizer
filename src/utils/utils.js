export const queHacerList = [{ image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png', name: 'League of Legends' }, { image: 'https://cdn-icons-png.flaticon.com/512/13/13973.png', name: 'Juego con historia' }, { image: 'https://thumbs.dreamstime.com/b/television-icon-vector-illustration-tv-symbol-web-sites-mobile-television-icon-vector-illustration-template-web-sites-155927779.jpg', name: 'Serie' }]

export const queHacerListDropActivo = [{ image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png', name: 'League of Legends' }, { image: 'https://cdn-icons-png.flaticon.com/512/13/13973.png', name: 'Juego con historia' }, { image: 'https://thumbs.dreamstime.com/b/television-icon-vector-illustration-tv-symbol-web-sites-mobile-television-icon-vector-illustration-template-web-sites-155927779.jpg', name: 'Serie' }, { name: 'Counter-Strike: Global Offensive' }]

const DOTA2 = { image: 'https://1000marcas.net/wp-content/uploads/2020/02/Dota-2-Logo.png', name: 'DOTA 2' }
const AGE = { image: 'https://steamuserimages-a.akamaihd.net/ugc/860612455486950246/A1754BD654E7AF9A5B867BC031AF0D155B7DB76C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', name: 'Age of Empires II: Definitive Edition' }

export const agePossibilities = ['Online', 'Historia']

export function calcularWinRate(pick, win) {
    let winRate = win * 100 / pick
    return winRate.toFixed(2)
}

export const offLane = ['Abaddon', 'Bristleback', 'Chaos Knight', 'Dark Seer', 'Dawnbreaker', 'Death Prophet', 'Doom', 'Dragon Knight', 'Elder Titan', 'Kunkka', 'Magnus', 'Mars', 'Necrophos', 'Night Stalker', 'Ogre Magi', 'Omniknight', 'Primal Beast', 'Razor', 'Slardar', 'Tidehunter', 'Timbersaw', 'Underlord', 'Viper', 'Wraith King']

export const softSupport = ['Ancient Apparition', 'Bane', 'Bounty Hunter', 'Clockwerk', 'Dark Willow', 'Earthshaker', 'Enchantress', 'Grimstroke', 'Gyrocopter', 'Hoodwink', 'Jakiro', 'Keeper of the Light', 'Mirana', 'Phoenix', 'Pugna', 'Rubick', 'Shadow Demon', 'Silencer', 'Skywrath Mage', 'Snapfire', 'Treant Protector', 'Tusk', 'Undying', 'Vengeful Spirit', 'Venomancer']

export const hardSupport = ['Ancient Apparition', 'Bane', 'Crystal Maiden', 'Dark Willow', 'Dazzle', 'Disruptor', 'Enchantress', 'Grimstroke', 'Hoodwink', 'Jakiro', 'Keeper of the Light', 'Lich', 'Ogre Magi', 'Pugna', 'Rubick', 'Shadow Demon', 'Silencer', 'Skywrath Mage', 'Snapfire', 'Treant Protector', 'Undying', 'Vengeful Spirit', 'Venomancer', 'Winter Wyvern', 'Witch Doctor']

export const lolPositions = ['Top', 'Support']

export const topChampions = ['Camille', 'Illaoi', 'Pantheon']

export const suppChampions = ['Swain', 'Poppy', 'Pantheon']

export function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}