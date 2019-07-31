import {
  PLANK,
  STEEL_NAILS,
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  LIMESTONE_BRICK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  STEEL_BAR,
  CAPE_OF_LEGENDS,
  MYTHICAL_CAPE,
  AMULET_OF_GLORY,
  ANTI_DRAGON_SHIELD,
  KING_ARTHUR_PORTRAIT,
  KELDAGRIM_PORTRAIT,
  ELENA_PORTRAIT,
  MISCELLANIANS_PORTRAIT,
  LUMBRIDGE_PAINTING,
  DESERT_PAINTING,
  MORYTANIA_PAINTING,
  KARAMJA_PAINTING,
  ISAFDAR_PAINTING,
  SILVERLIGHT,
  EXCALIBUR,
  DARKLIGHT,
  SMALL_MAP,
  MEDIUM_MAP,
  LARGE_MAP
} from "../itemData/itemConstatnts";

export const questHall = {
  id: "8403",
  name: "Quest hall",
  level: "35",
  price: "25000",
  type: "indoor",
  hotSpots: [
    {
      name: "Stairs/Rugs",
      builds: [
        {
          id: "8317",
          name: "Rug",
          level: "13",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 4 }]
        },
        {
          id: "8318",
          name: "Opulent rug",
          level: "65",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          id: "8249",
          name: "Oak staircase",
          level: "27",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          id: "8252",
          name: "Teak staircase",
          level: "48",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          id: "8258",
          name: "Spirial staircase",
          level: "67",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: LIMESTONE_BRICK, quantity: 7 }
          ]
        },
        {
          id: "8255",
          name: "Marble staircase",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 5 }
          ]
        },
        {
          id: "8259",
          name: "Marble spiral",
          level: "97",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: MARBLE_BLOCK, quantity: 7 }
          ]
        }
      ]
    },
    {
      name: "Guild trophy",
      builds: [
        {
          id: "8282",
          name: "Anti-dragon shield",
          level: "47",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: ANTI_DRAGON_SHIELD, quantity: 1 }
          ]
        },
        {
          id: "8283",
          name: "Amulet of Glory",
          level: "47",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: AMULET_OF_GLORY, quantity: 1 }
          ]
        },
        {
          id: "8284",
          name: "Cape of legends",
          level: "47",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: CAPE_OF_LEGENDS, quantity: 1 }
          ]
        },
        {
          id: "21913",
          name: "Mythical cape",
          level: "47",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: MYTHICAL_CAPE, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Portrait",
      builds: [
        {
          id: "8285",
          name: "King Arthur",
          level: "35",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: KING_ARTHUR_PORTRAIT, quantity: 1 }
          ]
        },
        {
          id: "8286",
          name: "Elena",
          level: "35",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: ELENA_PORTRAIT, quantity: 1 }
          ]
        },
        {
          id: "8287",
          name: "Giant Dwarf",
          level: "35",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: KELDAGRIM_PORTRAIT, quantity: 1 }
          ]
        },
        {
          id: "8288",
          name: "Miscellanians",
          level: "55",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: MISCELLANIANS_PORTRAIT, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Landscape",
      builds: [
        {
          id: "8289",
          name: "Lumbridge",
          level: "44",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: LUMBRIDGE_PAINTING, quantity: 1 }
          ]
        },
        {
          id: "8290",
          name: "The desert",
          level: "44",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: DESERT_PAINTING, quantity: 1 }
          ]
        },
        {
          id: "8291",
          name: "Morytania",
          level: "44",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: MORYTANIA_PAINTING, quantity: 1 }
          ]
        },
        {
          id: "8292",
          name: "Karamja",
          level: "65",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: KARAMJA_PAINTING, quantity: 1 }
          ]
        },
        {
          id: "8283",
          name: "Isafdar",
          level: "65",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: ISAFDAR_PAINTING, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Sword",
      builds: [
        {
          id: "8279",
          name: "Silverlight",
          level: "42",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: SILVERLIGHT, quantity: 1 }
          ]
        },
        {
          id: "8280",
          name: "Excalibur",
          level: "42",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: EXCALIBUR, quantity: 1 }
          ]
        },
        {
          id: "8281",
          name: "Darklight",
          level: "42",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: DARKLIGHT, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Map",
      builds: [
        {
          id: "8294",
          name: "Small map",
          level: "38",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: SMALL_MAP, quantity: 1 }
          ]
        },
        {
          id: "8295",
          name: "Medium map",
          level: "58",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: MEDIUM_MAP, quantity: 1 }
          ]
        },
        {
          id: "8296",
          name: "Large map",
          level: "78",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: LARGE_MAP, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Bookcase",
      builds: [
        {
          id: "8319",
          name: "Wooden bookcase",
          level: "4",
          materials: [
            { name: PLANK, quantity: 4 },
            { name: STEEL_NAILS, quantity: 4 }
          ]
        },
        {
          id: "8320",
          name: "Oak bookcase",
          level: "29",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          id: "8321",
          name: "Mahogany bookcase",
          level: "40",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        }
      ]
    }
  ]
};
