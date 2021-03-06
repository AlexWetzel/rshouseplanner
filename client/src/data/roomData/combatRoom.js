import {
  OAK_PLANK,
  TEAK_PLANK,
  BOLT_OF_CLOTH,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  STEEL_BAR,
  BUCKET_OF_SAND,
  BUCKET_OF_SLIME,
  BLACK_MASK
} from "../itemData/itemConstatnts";

export const combatRoom = {
  id: "8400",
  name: "Combat room",
  level: "32",
  price: "25000",
  type: "indoor",
  hotSpots: [
    {
      name: "Ring",
      builds: [
        {
          id: "8023",
          name: "Boxing ring",
          level: "32",
          materials: [
            { name: OAK_PLANK, quantity: 6 },
            { name: BOLT_OF_CLOTH, quantity: 4 }
          ]
        },
        {
          id: "8024",
          name: "Fencing ring",
          level: "41",
          materials: [
            { name: OAK_PLANK, quantity: 8 },
            { name: BOLT_OF_CLOTH, quantity: 6 }
          ]
        },
        {
          id: "8025",
          name: "Combat ring",
          level: "51",
          materials: [
            { name: TEAK_PLANK, quantity: 6 },
            { name: BOLT_OF_CLOTH, quantity: 6 }
          ]
        },
        {
          id: "8026",
          name: "Ranging pedestals",
          level: "71",
          materials: [{ name: TEAK_PLANK, quantity: 8 }]
        },
        {
          id: "8027",
          name: "Balance beam",
          level: "81",
          materials: [
            { name: TEAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 5 }
          ]
        }
      ]
    },
    {
      name: "Combat dummy",
      builds: [
        {
          id: "20745",
          name: "Combat dummy",
          level: "48",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 4 },
            { name: BUCKET_OF_SAND, quantity: 5 }
          ]
        },
        {
          id: "20746",
          name: "Undead combat dummy",
          level: "53",
          materials: [
            { name: TEAK_PLANK, quantity: 5 },
            { name: BOLT_OF_CLOTH, quantity: 4 },
            { name: BUCKET_OF_SAND, quantity: 5 },
            { name: BLACK_MASK, quantity: 1 },
            { name: BUCKET_OF_SLIME, quantity: 4 }
          ]
        }
      ]
    },
    {
      name: "Rack",
      builds: [
        {
          name: "Boxing glove rack",
          level: "34",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Weapons rack",
          level: "44",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          name: "Extra weapons rack",
          level: "54",
          materials: [
            { name: TEAK_PLANK, quantity: 4 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        }
      ]
    },
    {
      name: "Decoration",
      builds: [
        {
          id: "8028",
          name: "Oak decoration",
          level: "16",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8029",
          name: "Teak decoration",
          level: "36",
          materials: [{ name: TEAK_PLANK, quantity: 2 }]
        },
        {
          id: "8030",
          name: "Gilded decoration",
          level: "56",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 2 }
          ]
        }
      ]
    }
  ]
};
