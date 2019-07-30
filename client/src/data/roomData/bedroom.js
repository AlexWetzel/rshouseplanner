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
  id: "8398",
  name: "Bedroom",
  level: "20",
  price: "10000",
  type: "indoor",
  hotSpots: [
    {
      name: "Bed",
      builds: [
        {
          id: "8031",
          name: "Wooden bed",
          level: "20",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          id: "8032",
          name: "Oak bed",
          level: "30",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          id: "8033",
          name: "Large oak bed",
          level: "34",
          materials: [
            { name: OAK_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          id: "8034",
          name: "Teak bed",
          level: "40",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          id: "8035",
          name: "Large teak bed",
          level: "45",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          id: "8036",
          name: "4-poster",
          level: "53",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        },
        {
          id: "8037",
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
          id: "8045",
          name: "Shaving stand",
          level: "21",
          materials: [
            { name: PLANK, quantity: 1 },
            { name: STEEL_NAILS, quantity: 1 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8046",
          name: "Oak shaving stand",
          level: "29",
          materials: [
            { name: OAK_PLANK, quantity: 1 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8047",
          name: "Oak dresser",
          level: "37",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8048",
          name: "Teak dresser",
          level: "46",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8049",
          name: "Fancy teak dresser",
          level: "56",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 2 }
          ]
        },
        {
          id: "8050",
          name: "Mahogany dresser",
          level: "64",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8051",
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
          id: "8325",
          name: "Clay fireplace",
          level: "3",
          materials: [{ name: SOFT_CLAY, quantity: 3 }]
        },
        {
          id: "8326",
          name: "Stone fireplace",
          level: "33",
          materials: [{ name: LIMESTONE_BRICK, quantity: 2 }]
        },
        {
          id: "8327",
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
          id: "8052",
          name: "Oak clock",
          level: "25",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: CLOCKWORK, quantity: 1 }
          ]
        },
        {
          id: "8053",
          name: "Teak clock",
          level: "55",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: CLOCKWORK, quantity: 1 }
          ]
        },
        {
          id: "21213",
          name: "Servant's moneybag",
          level: "58",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          id: "8054",
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
          id: "8316",
          name: "Brown rug",
          level: "2",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 2 }]
        },
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
          id: "8322",
          name: "Torn curtains",
          level: "2",
          materials: [
            { name: PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 3 },
            { name: STEEL_NAILS, quantity: 3 }
          ]
        },
        {
          id: "8323",
          name: "Curtains",
          level: "18",
          materials: [
            { name: OAK_PLANK, quantity: 3 },
            { name: BOLT_OF_CLOTH, quantity: 3 }
          ]
        },
        {
          id: "8324",
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
          id: "8038",
          name: "Shoe box",
          level: "20",
          materials: [
            { name: PLANK, quantity: 2 },
            { name: STEEL_NAILS, quantity: 2 }
          ]
        },
        {
          id: "8039",
          name: "Oak drawers",
          level: "27",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8040",
          name: "Oak wardrobe",
          level: "39",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          id: "8041",
          name: "Teak drawers",
          level: "51",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          id: "8042",
          name: "Teak wardrobe",
          level: "63",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          id: "8043",
          name: "Mahogany wardrobe",
          level: "75",
          materials: [{ name: MAHOGANY_PLANK, quantity: 3 }]
        },
        {
          id: "8044",
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
