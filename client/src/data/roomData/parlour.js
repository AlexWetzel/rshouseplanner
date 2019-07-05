import {
  PLANK,
  STEEL_NAILS,
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  LIMESTONE_BRICK,
  SOFT_CLAY,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
} from "../itemData/itemConstatnts";

export const parlour = {
  name: "Parlour",
  level: "1",
  price: "1000",
  type: "indoor",
  hotSpots: [
    {
      name: "Chair 1",
      builds: [
        {
          name: "Crude wooden chair",
          level: "1",
          materials: [
            { name: PLANK, quantity: 2 },
            { name: STEEL_NAILS, quantity: 2 }
          ]
        },
        {
          name: "Wooden chair",
          level: "8",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Rocking chair",
          level: "14",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Oak chair",
          level: "19",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Oak armchair",
          level: "26",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          name: "Teak armchair",
          level: "35",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany armchair",
          level: "50",
          materials: [{ name: MAHOGANY_PLANK, quantity: 2 }]
        }
      ]
    },
    {
      name: "Chair 2",
      builds: [
        {
          name: "Crude wooden chair",
          level: "1",
          materials: [
            { name: PLANK, quantity: 2 },
            { name: STEEL_NAILS, quantity: 2 }
          ]
        },
        {
          name: "Wooden chair",
          level: "8",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Rocking chair",
          level: "14",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Oak chair",
          level: "19",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Oak armchair",
          level: "26",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          name: "Teak armchair",
          level: "35",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany armchair",
          level: "50",
          materials: [{ name: MAHOGANY_PLANK, quantity: 2 }]
        }
      ]
    },
    {
      name: "Chair 3",
      builds: [
        {
          name: "Crude wooden chair",
          level: "1",
          materials: [
            { name: PLANK, quantity: 2 },
            { name: STEEL_NAILS, quantity: 2 }
          ]
        },
        {
          name: "Wooden chair",
          level: "8",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Rocking chair",
          level: "14",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          name: "Oak chair",
          level: "19",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Oak armchair",
          level: "26",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          name: "Teak armchair",
          level: "35",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany armchair",
          level: "50",
          materials: [{ name: MAHOGANY_PLANK, quantity: 2 }]
        }
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
      name: "Fireplace",
      builds: [
        {
          name: "Clay fireplace",
          level: "3",
          materials: [{ name: SOFT_CLAY, quantity: 3 }]
        },
        {
          name: "Stone fireplace",
          level: "33",
          materials: [{ name: LIMESTONE_BRICK, quantity: 2 }]
        },
        {
          name: "Marble fireplace",
          level: "63",
          materials: [{ name:MARBLE_BLOCK, quantity: 1 }]
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
      name: "Bookcase",
      builds: [
        {
          name: "Wooden bookcase",
          level: "4",
          materials: [
            { name: PLANK, quantity: 4 },
            { name: STEEL_NAILS, quantity: 4 }
          ]
        },
        {
          name: "Oak bookcase",
          level: "29",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          name: "Mahogany bookcase",
          level: "40",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        }
      ]
    }
  ]
};
