import {
  OAK_PLANK,
  TEAK_PLANK,
  MAHOGANY_PLANK,
  BONES,
  SKULL,
  STEEL_BAR,
  COINS,
  BUCKET_OF_WATER,
  TINDERBOX,
  RED_DYE,
  CANDLE,
  TORCH
} from "../itemData/itemConstatnts";

export const oubliette = {
  name: "Oubliette",
  level: "65",
  price: "150000",
  type: "dungeon",
  hotSpots: [
    {
      name: "Floor",
      builds: [
        {
          name: "Spikes",
          level: "65",
          materials: [
            { name: STEEL_BAR, quantity: 20 },
            { name: COINS, quantity: 50000 }
          ]
        },
        {
          name: "Tentagle pool",
          level: "71",
          materials: [
            { name: BUCKET_OF_WATER, quantity: 20 },
            { name: COINS, quantity: 100000 }
          ]
        },
        {
          name: "Flame pit",
          level: "77",
          materials: [
            { name: TINDERBOX, quantity: 20 },
            { name: COINS, quantity: 100000 }
          ]
        },
        {
          name: "Rocnar",
          level: "77",
          materials: [{ name: COINS, quantity: 150000 }]
        }
      ]
    },
    {
      name: "Prison",
      builds: [
        {
          name: "Oak cage",
          level: "65",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          name: "Oak and steel cage",
          level: "70",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 10 }
          ]
        },
        {
          name: "Steel cage",
          level: "75",
          materials: [{ name: STEEL_BAR, quantity: 20 }]
        },
        {
          name: "Spiked cage",
          level: "80",
          materials: [{ name: STEEL_BAR, quantity: 25 }]
        },
        {
          name: "Bone cage",
          level: "85",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: BONES, quantity: 10 }
          ]
        }
      ]
    },
    {
      name: "Guard",
      builds: [
        {
          name: "Skeleton guard",
          level: "70",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          name: "Guard dog",
          level: "74",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          name: "Hobgoblin",
          level: "78",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          name: "Baby red dragon",
          level: "82",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          name: "Huge spider",
          level: "86",
          materials: [{ name: COINS, quantity: 200000 }]
        },
        {
          name: "Troll guard",
          level: "90",
          materials: [{ name: COINS, quantity: 1000000 }]
        },
        {
          name: "Hellhound",
          level: "94",
          materials: [{ name: COINS, quantity: 5000000 }]
        }
      ]
    },
    {
      name: "Ladder",
      builds: [
        {
          name: "Oak ladder",
          level: "68",
          materials: [{ name: OAK_PLANK, quantity: 5 }]
        },
        {
          name: "Teak ladder",
          level: "78",
          materials: [{ name: TEAK_PLANK, quantity: 5 }]
        },
        {
          name: "Mahogany ladder",
          level: "88",
          materials: [{ name: MAHOGANY_PLANK, quantity: 5 }]
        }
      ]
    },
    {
      name: "Decoration",
      builds: [
        {
          name: "Decorative blood",
          level: "72",
          materials: [{ name: RED_DYE, quantity: 4 }]
        },
        {
          name: "Decorative pipe",
          level: "83",
          materials: [{ name: STEEL_BAR, quantity: 6 }]
        },
        {
          name: "Hanging skeleton",
          level: "94",
          materials: [
            { name: SKULL, quantity: 2 },
            { name: BONES, quantity: 6 }
          ]
        }
      ]
    },
    {
      name: "Lighting",
      builds: [
        {
          name: "Candle",
          level: "72",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: CANDLE, quantity: 4 }
          ]
        },
        {
          name: "Torch",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TORCH, quantity: 4 }
          ]
        },
        {
          name: "Skull torch",
          level: "94",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TORCH, quantity: 4 },
            { name: SKULL, quantity: 4 }
          ]
        }
      ]
    }
  ]
};
