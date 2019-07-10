import {
  OAK_PLANK,
  TEAK_PLANK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  MAGIC_STONE
} from "../itemData/itemConstatnts";

export const costumeRoom = {
  name: "Costume room",
  level: "42",
  price: "50000",
  type: "indoor",
  hotSpots: [
    {
      name: "Treasure chest",
      builds: [
        {
          name: "Oak treasure chest",
          level: "48",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak treasure chest",
          level: "66",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany treasure chest",
          level: "84",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        }
      ]
    },
    {
      name: "Armour case",
      builds: [
        {
          name: "Oak armour case",
          level: "46",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak armour case",
          level: "64",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany armour case",
          level: "82",
          materials: [{ name: MAHOGANY_PLANK, quantity: 2 }]
        }
      ]
    },
    {
      name: "Magic wardrobe",
      builds: [
        {
          name: "Oak magic wardrobe",
          level: "42",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved oak magic wardrobe",
          level: "51",
          materials: [{ name: OAK_PLANK, quantity: 6 }]
        },
        {
          name: "Teak magic wardrobe",
          level: "60",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved teak magic wardrobe",
          level: "69",
          materials: [{ name: TEAK_PLANK, quantity: 6 }]
        },
        {
          name: "Mahogany magic wardrobe",
          level: "78",
          materials: [{ name: MAHOGANY_PLANK, quantity: 4 }]
        },
        {
          name: "Gilded magic wardrobe",
          level: "87",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Marble magic wardrobe",
          level: "96",
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        }
      ]
    },
    {
      name: "Cape rack",
      builds: [
        {
          name: "Oak cape rack",
          level: "54",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Teak cape rack",
          level: "63",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Mahogany cape rack",
          level: "72",
          materials: [{ name: MAHOGANY_PLANK, quantity: 4 }]
        },
        {
          name: "Gilded cape rack",
          level: "81",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Marble cape rack",
          level: "90",
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        },
        {
          name: "Magical cape rack",
          level: "99",
          materials: [{ name: MAGIC_STONE, quantity: 1 }]
        }
      ]
    },
    {
      name: "Toy box",
      builds: [
        {
          name: "Oak toy box",
          level: "50",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak toy box",
          level: "68",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany toy box",
          level: "86",
          materials: [{ name: MAHOGANY_PLANK, quantity: 2 }]
        }
      ]
    },
    {
      name: "Fancy dress box",
      builds: [
        {
          name: "Oak fancy dress box",
          level: "44",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak fancy dress box",
          level: "62",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany fancy dress box",
          level: "80",
          materials: [{ name: MAHOGANY_PLANK, quantity: 2 }]
        }
      ]
    }
  ]
};
