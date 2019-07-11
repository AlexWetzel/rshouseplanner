import {
  TEAK_PLANK,
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
  BASALT,
  GOLD_LEAF,
  MAGIC_STONE,
  XERICS_TALISMAN_INERT,
  LIZARDMAN_FANG,
  CURATORS_MEDALLION,
  BOLT_OF_CLOTH,
  PLANK,
  STEEL_NAILS,
  OAK_PLANK,
} from "../itemData/itemConstatnts";

export const portalNexus = {
  name: "Portal nexus",
  level: "72",
  price: "200000",
  type: "indoor",
  hotSpots: [
    {
      name: "Portal nexus",
      builds: [
        {
          name: "Marble portal nexus",
          level: "72",
          materials: [
            { name: MARBLE_BLOCK, quantity: 4 },
          ]
        },
        {
          name: "Gilded portal nexus",
          level: "82",
          materials: [
            { name: MARBLE_BLOCK, quantity: 8 },
            { name: GOLD_LEAF, quantity: 2 },
          ]
        },
        {
          name: "Gilded portal nexus",
          level: "82",
          materials: [
            { name: MARBLE_BLOCK, quantity: 8 },
            { name: MAGIC_STONE, quantity: 2 },
            { name: GOLD_LEAF, quantity: 4 },
          ]
        },
 
      ]
    },
    {
      name: "Amulet 1",
      builds: [
        {
          name: "Mounted Xeric's talisman",
          level: "72",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: XERICS_TALISMAN_INERT, quantity: 1 },
            { name: LIZARDMAN_FANG, quantity: 5000 },
          ]
        },
        {
          name: "Mounted digsite pendant",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: CURATORS_MEDALLION, quantity: 1 },
          ]
        },
      ]
    },
    {
      name: "Amulet 2",
      builds: [
        {
          name: "Mounted Xeric's talisman",
          level: "72",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: XERICS_TALISMAN_INERT, quantity: 1 },
            { name: LIZARDMAN_FANG, quantity: 5000 },
          ]
        },
        {
          name: "Mounted digsite pendant",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: CURATORS_MEDALLION, quantity: 1 },
          ]
        },
      ]
    },
    {
      name: "Rug",
      builds: [
        {
          name: "Brown rug",
          level: "2",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 2 }]
        },
        {
          name: "Rug",
          level: "13",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 4 }]
        },
        {
          name: "Opulent rug",
          level: "65",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 4 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    },

    {
      name: "Curtains",
      builds: [
        {
          name: "Torn curtains",
          level: "2",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Curtains",
          level: "18",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 3 }
          ]
        },
        {
          name: "Opulent curtains",
          level: "40",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 3 }
          ]
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
            { name: AIR_RUNE, quantity: 300 }, 
          ]
        },
        {
          name: "Lumbridge",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 }, 
            { name: EARTH_RUNE, quantity: 100 }, 
            { name: AIR_RUNE, quantity: 300 }, 
          ]
        },
        {
          name: "Falador",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 }, 
            { name: WATER_RUNE, quantity: 100 }, 
            { name: AIR_RUNE, quantity: 300 }, 
          ]
        },
        {
          name: "Camelot",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 }, 
            { name: AIR_RUNE, quantity: 500 }, 
          ]
        },
        {
          name: "Ardougne",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 }, 
            { name: WATER_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Watchtower",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 }, 
            { name: EARTH_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Senntisten",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 100 }, 
            { name: LAW_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Marim",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 }, 
            { name: FIRE_RUNE, quantity: 200 }, 
            { name: WATER_RUNE, quantity: 200 }, 
            { name: BANANA, quantity: 100 }, 
          ]
        },
        {
          name: "Kharyrll",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 100 }, 
            { name: LAW_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Lunar Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 }, 
            { name: ASTRAL_RUNE, quantity: 200 }, 
            { name: EARTH_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Kourend Castle",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 }, 
            { name: LAW_RUNE, quantity: 200 }, 
            { name: FIRE_RUNE, quantity: 500 }, 
            { name: WATER_RUNE, quantity: 400 }, 
          ]
        },
        {
          name: "Waterbirth Isle",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 100 }, 
            { name: ASTRAL_RUNE, quantity: 200 }, 
            { name: WATER_RUNE, quantity: 100 }, 
          ]
        },
        {
          name: "Carrallangar",
          level: "0",
          materials: [
            { name: SOUL_RUNE, quantity: 200 }, 
            { name: LAW_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Fishing guild",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 }, 
            { name: ASTRAL_RUNE, quantity: 300 }, 
            { name: WATER_RUNE, quantity: 1000 }, 
          ]
        },
        {
          name: "Catherby",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 300 }, 
            { name: ASTRAL_RUNE, quantity: 300 }, 
            { name: WATER_RUNE, quantity: 1000 }, 
          ]
        },
        {
          name: "Annakarl",
          level: "0",
          materials: [
            { name: BLOOD_RUNE, quantity: 200 }, 
            { name: LAW_RUNE, quantity: 200 }, 
          ]
        },
        {
          name: "Ghorrock",
          level: "0",
          materials: [
            { name: LAW_RUNE, quantity: 200 }, 
            { name: BLOOD_RUNE, quantity: 800 }, 
          ]
        },
        {
          name: "Troll Stronghold",
          level: "0",
          materials: [
            { name: URT_SALT, quantity: 300 }, 
            { name: TE_SALT, quantity: 100 }, 
            { name: BASALT, quantity: 100 }, 
          ]
        },
      ]
    },
  ]
};