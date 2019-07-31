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
          id: "8341",
          name: "Globe",
          level: "41",
          materials: [{ name: OAK_PLANK, quantity: 3 }]
        },
        {
          id: "8342",
          name: "Ornamental Globe",
          level: "50",
          materials: [{ name: TEAK_PLANK, quantity: 3 }]
        },
        {
          id: "8343",
          name: "Lunar globe",
          level: "59",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },
        {
          id: "8344",
          name: "Celestial globe",
          level: "68",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },

        {
          id: "8345",
          name: "Armillary sphere",
          level: "77",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 2 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          id: "8346",
          name: "Small orrery",
          level: "86",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 }
          ]
        },
        {
          id: "8347",
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
          id: "8334",
          name: "Oak lectern",
          level: "40",
          materials: [{ name: OAK_PLANK, quantity: 1 }]
        },
        {
          id: "8335",
          name: "Eagle lectern",
          level: "47",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8336",
          name: "Demon lectern",
          level: "47",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8337",
          name: "Teak eagle lectern",
          level: "57",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          id: "8338",
          name: "Teak demon lectern",
          level: "57",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          id: "8339",
          name: "Mahogany eagle lectern",
          level: "67",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 2 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          id: "8340",
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
          id: "8351",
          name: "Crystal ball",
          level: "42",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: UNPOWERED_ORB, quantity: 1 }
          ]
        },
        {
          id: "8352",
          name: "Elemental sphere",
          level: "54",
          materials: [
            { name: TEAK_PLANK, quantity: 3 },
            { name: UNPOWERED_ORB, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        },
        {
          id: "8353",
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
          id: "8348",
          name: "Wooden telescope",
          level: "44",
          materials: [
            { name: OAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8349",
          name: "Teak telescope",
          level: "64",
          materials: [
            { name: TEAK_PLANK, quantity: 2 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8350",
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
          id: "8354",
          name: "Alchemical chart",
          level: "43",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 2 }]
        },
        {
          id: "8355",
          name: "Astronomical chart",
          level: "63",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 3 }]
        },
        {
          id: "8356",
          name: "Infernal chart",
          level: "83",
          materials: [{ name: BOLT_OF_CLOTH, quantity: 4 }]
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
