import {
  OAK_PLANK,
  TEAK_PLANK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  CLOCKWORK,
  MAGIC_STONE,
  BONES,
  SKULL,
  STEEL_BAR
} from "../itemData/itemConstatnts";

export const throneRoom = {
  name: "Throne room",
  level: "60",
  price: "150000",
  type: "indoor", 
  hotSpots: [
    {
      name: "Throne",
      builds: [
        {
          name: "Oak throne",
          level: "60",
          materials: [
            { name: OAK_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 1 },
          ]
        },
        {
          name: "Teak throne",
          level: "67",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 2 },
          ]
        },
        {
          name: "Mahogany throne",
          level: "74",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 3 },
          ]
        },
        {
          name: "Gilded throne",
          level: "81",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 3 },
          ]
        },
        {
          name: "Gilded throne",
          level: "81",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 3 },
          ]
        },
        {
          name: "Skeleton throne",
          level: "88",
          materials: [
            { name: MAGIC_STONE, quantity: 5 },
            { name: MARBLE_BLOCK, quantity: 4 },
            { name: BONES, quantity: 5 },
            { name: SKULL, quantity: 3 },
          ]
        },
        {
          name: "Crystal throne",
          level: "95",
          materials: [
            { name: MAGIC_STONE, quantity: 15 },
          ]
        },
        {
          name: "Demonic throne",
          level: "99",
          materials: [
            { name: MAGIC_STONE, quantity: 25 },
          ]
        },
      ]
    },
    {
      name: "Lever",
      builds: [
        {
          name: "Oak lever",
          level: "65",
          materials: [
            { name: OAK_PLANK, quantity: 5 },
          ]
        },
        {
          name: "Teak lever",
          level: "78",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
          ]
        },
        {
          name: "Mahogany lever",
          level: "88",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
          ]
        },
      ]
    },
    {
      name: "Floor",
      builds: [
        {
          name: "Floor decoration",
          level: "61",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 }
          ]
        },
        {
          name: "Steel cage",
          level: "68",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: STEEL_BAR, quantity: 5 },
          ]
        },
        {
          name: "Trapdoor",
          level: "74",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: CLOCKWORK, quantity: 10 },
          ]
        },
        {
          name: "Lesser magic cage",
          level: "82",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MAGIC_STONE, quantity: 2 },
          ]
        },
        {
          name: "Greater magic cage",
          level: "89",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: MAGIC_STONE, quantity: 4 },
          ]
        },
      ]
    },
    {
      name: "Trapdoor",
      builds: [
        {
          name: "Oak trapdoor",
          level: "68",
          materials: [
            { name: OAK_PLANK, quantity: 5 },
          ]
        },
        {
          name: "Teak trapdoor",
          level: "78",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
          ]
        },
        {
          name: "Mahogany trapdoor",
          level: "88",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
          ]
        }
      ]
    },
    {
      name: "Seating 1",
      builds: [
        {
          name: "Carved teak bench",
          level: "44",
          materials: [
            { name: TEAK_PLANK, quantity: 4 }
          ]
        },
        {
          name: "Mahogany bench",
          level: "52",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 }
          ]
        },
        {
          name: "Gilded bench",
          level: "61",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 4 },
          ]
        },
      ]
    },
    {
      name: "Seating 2",
      builds: [
        {
          name: "Carved teak bench",
          level: "44",
          materials: [
            { name: TEAK_PLANK, quantity: 4 }
          ]
        },
        {
          name: "Mahogany bench",
          level: "52",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 }
          ]
        },
        {
          name: "Gilded bench",
          level: "61",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 4 },
          ]
        },
      ]
    },
    {
      name: "Decoration",
      builds: [
        {
          name: "Oak decoration",
          level: "16",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak decoration",
          level: "36",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Gilded decoration",
          level: "56",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        },
        {
          name: "Round shield",
          level: "66",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
          ]
        },
        {
          name: "Square shield",
          level: "76",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
          ]
        },
        {
          name: "Kite shield",
          level: "86",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 6 },
          ]
        },
      ]
    },
  ]
};
