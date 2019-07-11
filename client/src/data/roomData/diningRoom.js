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
  ROPE
} from "../itemData/itemConstatnts";

export const diningRoom = {
  name: "Dining room",
  level: "10",
  price: "5000",
  type: "indoor",
  hotSpots: [
    {
      name: "Table",
      builds: [
        {
          name: "Wood dining table",
          level: "10",
          materials: [
            { name: PLANK, quantity: 4 },
            { name: STEEL_NAILS, quantity: 4 }
          ]
        },
        {
          name: "Oak dining table",
          level: "22",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved oak table",
          level: "31",
          materials: [{ name: OAK_PLANK, quantity: 6 }]
        },
        {
          name: "Teak dining table",
          level: "38",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved teak table",
          level: "45",
          materials: [{ name: TEAK_PLANK, quantity: 6 }]
        },
        {
          name: "Mahogany table",
          level: "52",
          materials: [{ name: MAHOGANY_PLANK, quantity: 6 }]
        },
        {
          name: "Opulent table",
          level: "72",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 6 },
            { name: BOLT_OF_CLOTH, quantity: 4 },
            { name: GOLD_LEAF, quantity: 4 },
            { name: MARBLE_BLOCK, quantity: 2 }
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
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        }
      ]
    },
    {
      name: "Seating 1",
      builds: [
        {
          name: "Wooden bench",
          level: "10",
          materials: [
            { name: PLANK, quantity: 4 },
            { name: STEEL_NAILS, quantity: 4 }
          ]
        },
        {
          name: "Oak bench",
          level: "22",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved oak bench",
          level: "31",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Teak dining bench",
          level: "38",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved teak bench",
          level: "44",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Mahogany bench",
          level: "52",
          materials: [{ name: MAHOGANY_PLANK, quantity: 4 }]
        },
        {
          name: "Gilded bench",
          level: "61",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 4 }
          ]
        }
      ]
    },
    {
      name: "Seating 2",
      builds: [
        {
          name: "Wooden bench",
          level: "10",
          materials: [
            { name: PLANK, quantity: 4 },
            { name: STEEL_NAILS, quantity: 4 }
          ]
        },
        {
          name: "Oak bench",
          level: "22",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved oak bench",
          level: "31",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Teak dining bench",
          level: "38",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved teak bench",
          level: "44",
          materials: [{ name: TEAK_PLANK, quantity: 4 }]
        },
        {
          name: "Mahogany bench",
          level: "52",
          materials: [{ name: MAHOGANY_PLANK, quantity: 4 }]
        },
        {
          name: "Gilded bench",
          level: "61",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 4 },
            { name: GOLD_LEAF, quantity: 4 }
          ]
        }
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
        }
      ]
    },
    {
      name: "Bell-pull",
      builds: [
        {
          name: "Rope bell-pull",
          level: "26",
          materials: [
            { name: OAK_PLANK, quantity: 1 },
            { name: ROPE, quantity: 1 }
          ]
        },
        {
          name: "Bell-pull",
          level: "37",
          materials: [
            { name: TEAK_PLANK, quantity: 1 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "Posh bell-pull",
          level: "60",
          materials: [
            { name: TEAK_PLANK, quantity: 1 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
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
    }
  ]
};
