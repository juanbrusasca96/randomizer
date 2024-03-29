const DOTA2 = { image: 'https://cdn-icons-png.flaticon.com/512/871/871366.png', name: 'DOTA 2' }
const LOL = { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png', name: 'League of Legends' }
const FIFA = { name: 'FIFA' }
const JUEGOCONHISTORIA = { image: 'https://cdn-icons-png.flaticon.com/512/5260/5260498.png', name: 'Juego con historia' }
const SERIE = { image: 'https://cdn-icons-png.flaticon.com/512/4236/4236854.png', name: 'Serie' }
export const AGE = { image: 'https://aoecompanion.com/img/helmet.svg', name: 'Age of Empires II: Definitive Edition' }
export const COUNTER = { name: 'Counter-Strike: Global Offensive' }
const PODCAST = { image: 'https://cdn-icons-png.flaticon.com/128/2368/2368393.png', name: 'Podcast' }
const PROGRAMACION = { image: 'https://cdn-icons-png.flaticon.com/128/1197/1197409.png', name: 'Programación' }
const LEER = {name: 'Leer'}
const YOUTUBEFINANZAS = { name: 'Youtube finanzas' }

export const HISTORIA = {image: 'https://cdn-icons-png.flaticon.com/128/2682/2682065.png', name: 'Historia'}
export const JUEGOONLINEPRIMARIO = { image: 'https://cdn-icons-png.flaticon.com/512/771/771241.png', name: 'Juego algo que tenga ganas' }
// export const JUEGOONLINESECUNDARIO = { image: 'https://cdn-icons-png.flaticon.com/512/5804/5804883.png', name: 'Juego online secundario' }
export const ESTUDIO = { image: 'https://cdn-icons-png.flaticon.com/128/11509/11509813.png', name: 'Estudio' }

export const COSASCONHISTORIA = [JUEGOCONHISTORIA, SERIE]
// export const JUEGOSPRIMARIOS = [LOL, FIFA]
export const JUEGOSPRIMARIOS = [JUEGOONLINEPRIMARIO]
export const JUEGOSSECUNDARIOS = [DOTA2, AGE]
export const COSASESTUDIO = [YOUTUBEFINANZAS]

// export const queHacerList = [JUEGOONLINEPRIMARIO, JUEGOONLINESECUNDARIO, HISTORIA, ESTUDIO]
export const queHacerList = [JUEGOONLINEPRIMARIO, HISTORIA]

export const queHacerListDropActivo = [...queHacerList, COUNTER]

export const agePossibilities = ['Online', 'Historia']

export const weightPercentages = {
    JUEGOONLINEPRIMARIO: 70,
    // JUEGOONLINESECUNDARIO: 20,
    HISTORIA: 30, 
    // ESTUDIO: 10
  };

export const weightPercentagesDropActivo = {
    JUEGOONLINEPRIMARIO: 60,
    // JUEGOONLINESECUNDARIO: 10,
    HISTORIA: 20,
    // ESTUDIO: 5,
    COUNTER: 20
    };
  
  // Calcula el peso total
export const totalWeight = (weightPercentages) => {
    return Object.values(weightPercentages).reduce((acc, cur) => acc + cur, 0);
    };
  

export function calcularWinRate(pick, win) {
    let winRate = win * 100 / pick
    return winRate.toFixed(2)
}

export const offLane = ['Abaddon', 'Bristleback', 'Chaos Knight', 'Dark Seer', 'Dawnbreaker', 'Death Prophet', 'Doom', 'Dragon Knight', 'Elder Titan', 'Kunkka', 'Magnus', 'Mars', 'Necrophos', 'Night Stalker', 'Ogre Magi', 'Omniknight', 'Primal Beast', 'Razor', 'Slardar', 'Tidehunter', 'Timbersaw', 'Underlord', 'Viper']

export const softSupport = ['Ancient Apparition', 'Bane', 'Bounty Hunter', 'Clockwerk', 'Dark Willow', 'Earthshaker', 'Enchantress', 'Grimstroke', 'Gyrocopter', 'Hoodwink', 'Jakiro', 'Keeper of the Light', 'Mirana', 'Phoenix', 'Pugna', 'Rubick', 'Shadow Demon', 'Silencer', 'Skywrath Mage', 'Snapfire', 'Treant Protector', 'Tusk', 'Undying', 'Vengeful Spirit', 'Venomancer']

export const hardSupport = ['Ancient Apparition', 'Bane', 'Crystal Maiden', 'Dark Willow', 'Dazzle', 'Disruptor', 'Enchantress', 'Grimstroke', 'Hoodwink', 'Jakiro', 'Keeper of the Light', 'Lich', 'Ogre Magi', 'Pugna', 'Rubick', 'Shadow Demon', 'Silencer', 'Skywrath Mage', 'Snapfire', 'Treant Protector', 'Undying', 'Vengeful Spirit', 'Venomancer', 'Winter Wyvern', 'Witch Doctor']

export const lolPositions = ['Top', 'Support']

export const topChampions = ['Xerath', 'Velkoz']

export const suppChampions = ['Nami', 'Seraphine']

export function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}