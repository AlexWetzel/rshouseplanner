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
  MOLTEN_GLASS,
  CLOCKWORK
} from "../itemData/itemConstatnts";

export const bedroom = {
  name: "Bedroom",
  level: "20",
  price: "10000",
  hotSpots: [
    {
      name: "Bed",
      builds: [
        {
          name: "Wooden bed",
          level: "20",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "Oak bed",
          level: "30",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "Large oak bed",
          level: "34",
          materials: [
            { name: OAK_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "Teak bed",
          level: "40",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "Large teak bed",
          level: "45",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "4-poster",
          level: "53",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          name: "Gilded 4-poster",
          level: "60",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 2 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        }
      ]
    },
    {
      name: "Dresser",
      builds: [
        {
          name: "Shaving stand",
          level: "21",
          materials: [
            { name: PLANK, quantity: 1 },
            { name: STEEL_NAILS, quantity: 1 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Oak shaving stand",
          level: "29",
          materials: [
            { name: OAK_PLANK, quantity: 1 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Oak dresser",
          level: "37",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Teak dresser",
          level: "46",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Fancy teak dresser",
          level: "56",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 2 }
          ]
        },
        {
          name: "Mahogany dresser",
          level: "64",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Gilded dresser",
          level: "74",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 2 },
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
          materials: [{ name: MARBLE_BLOCK, quantity: 1 }]
        }
      ]
    },
    {
      name: "Corner",
      builds: [
        {
          name: "Oak clock",
          level: "25",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: CLOCKWORK, quantity: 1 }
          ]
        },
        {
          name: "Teak clock",
          level: "55",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: CLOCKWORK, quantity: 1 }
          ]
        },
        {
          name: "Servant's moneybag",
          level: "58",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Mahogany clock",
          level: "85",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: CLOCKWORK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
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
      name: "Wardrobe",
      builds: [
        {
          name: "Shoe box",
          level: "20",
          materials: [
            { name: PLANK, quantity: 2 },
            { name: STEEL_NAILS, quantity: 2 }
          ]
        },
        {
          name: "Oak drawers",
          level: "27",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Oak wardrobe",
          level: "39",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          name: "Teak drawers",
          level: "51",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak wardrobe",
          level: "63",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          name: "Mahogany wardrobe",
          level: "75",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        },
        {
          name: "Gilded wardrobe",
          level: "87",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    }
  ]
};
