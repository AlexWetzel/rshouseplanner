import {
  OAK_PLANK,
  TEAK_PLANK,
  LIMESTONE_BRICK,
  SOFT_CLAY,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  STEEL_BAR,
  AIR_RUNE,
  EARTH_RUNE,
  WATER_RUNE,
  FIRE_RUNE
} from "../itemData/itemConstatnts";

export const gamesRoom = {
  name: "Games room",
  level: "30",
  price: "25000",
  hotSpots: [
    {
      name: "Stone",
      builds: [
        {
          name: "Clay attack stone",
          level: "39",
          materials: [{ name: SOFT_CLAY, quantity: 10 }]
        },
        {
          name: "Limestone attack stone",
          level: "59",
          materials: [{ name: LIMESTONE_BRICK, quantity: 10 }]
        },
        {
          name: "Marble attack stone",
          level: "79",
          materials: [{ name: MARBLE_BLOCK, quantity: 4 }]
        }
      ]
    },
    {
      name: "Ranging game",
      builds: [
        {
          name: "Hoop and stick",
          level: "30",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Dartboard",
          level: "54",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: STEEL_BAR, quantity: 1 }
          ]
        },
        {
          name: "Archery target",
          level: "81",
          materials: [
            { name: TEAK_PLANK, quantity: 6 },
            { name: STEEL_BAR, quantity: 3 }
          ]
        }
      ]
    },
    {
      name: "Elemental balance",
      builds: [
        {
          name: "Lesser magical balance",
          level: "37",
          materials: [
            { name: AIR_RUNE, quantity: 500 },
            { name: EARTH_RUNE, quantity: 500 },
            { name: WATER_RUNE, quantity: 500 },
            { name: FIRE_RUNE, quantity: 500 }
          ]
        },
        {
          name: "Lesser magical balance",
          level: "57",
          materials: [
            { name: AIR_RUNE, quantity: 1000 },
            { name: EARTH_RUNE, quantity: 1000 },
            { name: WATER_RUNE, quantity: 1000 },
            { name: FIRE_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Lesser magical balance",
          level: "77",
          materials: [
            { name: AIR_RUNE, quantity: 2000 },
            { name: EARTH_RUNE, quantity: 2000 },
            { name: WATER_RUNE, quantity: 2000 },
            { name: FIRE_RUNE, quantity: 2000 }
          ]
        }
      ]
    },
    {
      name: "Prize chest",
      builds: [
        {
          name: "Oak prize chest",
          level: "34",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Teak prize chest",
          level: "44",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Mahogany prize chest",
          level: "54",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Game",
      builds: [
        {
          name: "Jester",
          level: "39",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Treasure hunt",
          level: "49",
          materials: [
            { name: TEAK_PLANK, quantity: 8 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          name: "Hangman",
          level: "59",
          materials: [
            { name: TEAK_PLANK, quantity: 12 },
            { name: STEEL_BAR, quantity: 6 }
          ]
        }
      ]
    }
  ]
};
