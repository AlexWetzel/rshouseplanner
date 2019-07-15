import {
  OAK_PLANK,
  TEAK_PLANK,
  GOLD_LEAF,
  MAHOGANY_PLANK,
  STEEL_BAR,
  UNPOWERED_ORB,
  MOLTEN_GLASS,
  BOLT_OF_CLOTH,
  PLANK,
  STEEL_NAILS
} from "../itemData/itemConstatnts";

export const study = {
  name: "Study",
  level: "40",
  price: "50000",
  type: "indoor",
  hotSpots: [
    {
      name: "Globe",
      builds: [
        {
          name: "Globe",
          level: "41",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          name: "Ornamental Globe",
          level: "50",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          name: "Lunar globe",
          level: "59",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },
        {
          name: "Celestial globe",
          level: "68",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },
        {
          name: "Celestial globe",
          level: "68",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },
        {
          name: "Armillary sphere",
          level: "77",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 2 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          name: "Small orrery",
          level: "86",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },
        {
          name: "Large orrery",
          level: "95",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 5 }
          ]
        }
      ]
    },
    {
      name: "Lectern",
      builds: [
        {
          name: "Oak lectern",
          level: "40",
          materials: [{ name: OAK_PLANK, quantity: 1 }]
        },
        {
          name: "Eagle lectern",
          level: "47",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Demon lectern",
          level: "47",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak eagle lectern",
          level: "57",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Teak demon lectern",
          level: "57",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Mahogany eagle lectern",
          level: "67",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Mahogany demon lectern",
          level: "67",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Crystal ball",
      builds: [
        {
          name: "Crystal ball",
          level: "42",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: UNPOWERED_ORB, quantity: 1 }
          ]
        },
        {
          name: "Elemental sphere",
          level: "54",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: UNPOWERED_ORB, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          name: "Crystal of power",
          level: "66",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: UNPOWERED_ORB, quantity: 1 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        }
      ]
    },
    {
      name: "Telescope",
      builds: [
        {
          name: "Wooden telescope",
          level: "44",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Teak telescope",
          level: "64",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Mahogany telescope",
          level: "84",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Wall chart",
      builds: [
        {
          name: "Alchemical chart",
          level: "43",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 2 }]
        },
        {
          name: "Astronomical chart",
          level: "63",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 3 }]
        },
        {
          name: "Alchemical chart",
          level: "83",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 4 }]
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
