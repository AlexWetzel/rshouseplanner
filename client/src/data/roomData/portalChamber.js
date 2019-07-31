import {
  TEAK_PLANK,
  LIMESTONE_BRICK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  LAW_RUNE,
  FIRE_RUNE,
  AIR_RUNE,
  EARTH_RUNE,
  WATER_RUNE,
  SOUL_RUNE,
  BANANA,
  BLOOD_RUNE,
  ASTRAL_RUNE,
  URT_SALT,
  TE_SALT,
  BASALT
} from "../itemData/itemConstatnts";

export const portalChamber = {
  id: "8408",
  name: "Portal chamber",
  level: "50",
  price: "100000",
  type: "indoor",
  hotSpots: [
    {
      name: "Portal Frame 1",
      builds: [
        {
          id: "8328",
          name: "Teak portal",
          level: "50",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          id: "8329",
          name: "Mahogany portal",
          level: "65",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        },
        {
          id: "8330",
          name: "Marble portal",
          level: "80",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        }
      ]
    },
    {
      name: "Portal Frame 2",
      builds: [
        {
          id: "8328",
          name: "Teak portal",
          level: "50",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          id: "8329",
          name: "Mahogany portal",
          level: "65",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        },
        {
          id: "8330",
          name: "Marble portal",
          level: "80",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        }
      ]
    },
    {
      name: "Portal Frame 3",
      builds: [
        {
          id: "8328",
          name: "Teak portal",
          level: "50",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          id: "8329",
          name: "Mahogany portal",
          level: "65",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        },
        {
          id: "8330",
          name: "Marble portal",
          level: "80",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        }
      ]
    },
    {
      name: "Centrepiece",
      builds: [
        {
          id: "8331",
          name: "Teleport focus",
          level: "50",
          materials: [{ name: LIMESTONE_BRICK, quantity: 2 }]
        },
        {
          id: "8332",
          name: "Greater teleport focus",
          level: "65",
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        },
        {
          id: "8333",
          name: "Scrying pool",
          level: "80",
          materials: [{ name: MARBLE_BLOCK, quantity: 4 }]
        }
      ]
    },
    {
      name: "Portal 1",
      builds: [
        {
          name: "Varrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: FIRE_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Lumbridge",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: EARTH_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Falador",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: WATER_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Camelot",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 500 }
          ]
        },
        {
          name: "Ardougne",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Watchtower",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: EARTH_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Senntisten",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 100 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Marim",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: FIRE_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 200 },
            { name: BANANA, quantity: 100 }
          ]
        },
        {
          name: "Kharyrll",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 100 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Lunar Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: ASTRAL_RUNE, quantity: 200 },
            { name: EARTH_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Kourend Castle",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 },
            { name: FIRE_RUNE, quantity: 500 },
            { name: WATER_RUNE, quantity: 400 }
          ]
        },
        {
          name: "Waterbirth Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: ASTRAL_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 100 }
          ]
        },
        {
          name: "Carrallangar",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Fishing guild",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 },
            { name: ASTRAL_RUNE, quantity: 300 },
            { name: WATER_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Catherby",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 },
            { name: ASTRAL_RUNE, quantity: 300 },
            { name: WATER_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Annakarl",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Ghorrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: BLOOD_RUNE, quantity: 800 }
          ]
        },
        {
          name: "Troll Stronghold",
          level: "0",
          materials: [
            { name: URT_SALT, quantity: 300 },
            { name: TE_SALT, quantity: 100 },
            { name: BASALT, quantity: 100 }
          ]
        }
      ]
    },
    {
      name: "Portal 2",
      builds: [
        {
          name: "Varrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: FIRE_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Lumbridge",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: EARTH_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Falador",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: WATER_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Camelot",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 500 }
          ]
        },
        {
          name: "Ardougne",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Watchtower",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: EARTH_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Senntisten",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 100 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Marim",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: FIRE_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 200 },
            { name: BANANA, quantity: 100 }
          ]
        },
        {
          name: "Kharyrll",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 100 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Lunar Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: ASTRAL_RUNE, quantity: 200 },
            { name: EARTH_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Kourend Castle",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 },
            { name: FIRE_RUNE, quantity: 500 },
            { name: WATER_RUNE, quantity: 400 }
          ]
        },
        {
          name: "Waterbirth Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: ASTRAL_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 100 }
          ]
        },
        {
          name: "Carrallangar",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Fishing guild",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 },
            { name: ASTRAL_RUNE, quantity: 300 },
            { name: WATER_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Catherby",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 },
            { name: ASTRAL_RUNE, quantity: 300 },
            { name: WATER_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Annakarl",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Ghorrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: BLOOD_RUNE, quantity: 800 }
          ]
        },
        {
          name: "Troll Stronghold",
          level: "0",
          materials: [
            { name: URT_SALT, quantity: 300 },
            { name: TE_SALT, quantity: 100 },
            { name: BASALT, quantity: 100 }
          ]
        }
      ]
    },
    {
      name: "Portal 3",
      builds: [
        {
          name: "Varrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: FIRE_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Lumbridge",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: EARTH_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Falador",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: WATER_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 300 }
          ]
        },
        {
          name: "Camelot",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: AIR_RUNE, quantity: 500 }
          ]
        },
        {
          name: "Ardougne",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Watchtower",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: EARTH_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Senntisten",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 100 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Marim",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: FIRE_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 200 },
            { name: BANANA, quantity: 100 }
          ]
        },
        {
          name: "Kharyrll",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 100 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Lunar Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: ASTRAL_RUNE, quantity: 200 },
            { name: EARTH_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Kourend Castle",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 },
            { name: FIRE_RUNE, quantity: 500 },
            { name: WATER_RUNE, quantity: 400 }
          ]
        },
        {
          name: "Waterbirth Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 },
            { name: ASTRAL_RUNE, quantity: 200 },
            { name: WATER_RUNE, quantity: 100 }
          ]
        },
        {
          name: "Carrallangar",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Fishing guild",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 },
            { name: ASTRAL_RUNE, quantity: 300 },
            { name: WATER_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Catherby",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 },
            { name: ASTRAL_RUNE, quantity: 300 },
            { name: WATER_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Annakarl",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 200 },
            { name: LAW_RUNE, quantity: 200 }
          ]
        },
        {
          name: "Ghorrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 },
            { name: BLOOD_RUNE, quantity: 800 }
          ]
        },
        {
          name: "Troll Stronghold",
          level: "0",
          materials: [
            { name: URT_SALT, quantity: 300 },
            { name: TE_SALT, quantity: 100 },
            { name: BASALT, quantity: 100 }
          ]
        }
      ]
    }
  ]
};
