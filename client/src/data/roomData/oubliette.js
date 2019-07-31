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
  id: "8410",
  name: "Oubliette",
  level: "65",
  price: "150000",
  type: "dungeon",
  hotSpots: [
    {
      name: "Floor",
      builds: [
        {
          id: "8302",
          name: "Spikes",
          level: "65",
          materials: [
            { name: STEEL_BAR, quantity: 20 },
            { name: COINS, quantity: 50000 }
          ]
        },
        {
          id: "8303",
          name: "Tentagle pool",
          level: "71",
          materials: [
            { name: BUCKET_OF_WATER, quantity: 20 },
            { name: COINS, quantity: 100000 }
          ]
        },
        {
          id: "8304",
          name: "Flame pit",
          level: "77",
          materials: [
            { name: TINDERBOX, quantity: 20 },
            { name: COINS, quantity: 100000 }
          ]
        },
        {
          id: "8305",
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
          id: "8297",
          name: "Oak cage",
          level: "65",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          id: "8298",
          name: "Oak and steel cage",
          level: "70",
          materials: [
            { name: OAK_PLANK, quantity: 10 },
            { name: STEEL_BAR, quantity: 10 }
          ]
        },
        {
          id: "8299",
          name: "Steel cage",
          level: "75",
          materials: [{ name: STEEL_BAR, quantity: 20 }]
        },
        {
          id: "8300",
          name: "Spiked cage",
          level: "80",
          materials: [{ name: STEEL_BAR, quantity: 25 }]
        },
        {
          id: "8301",
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
          id: "8131",
          name: "Skeleton guard",
          level: "70",
          materials: [{ name: COINS, quantity: 50000 }]
        },
        {
          id: "8132",
          name: "Guard dog",
          level: "74",
          materials: [{ name: COINS, quantity: 75000 }]
        },
        {
          id: "8133",
          name: "Hobgoblin",
          level: "78",
          materials: [{ name: COINS, quantity: 100000 }]
        },
        {
          id: "8134",
          name: "Baby red dragon",
          level: "82",
          materials: [{ name: COINS, quantity: 150000 }]
        },
        {
          id: "8135",
          name: "Huge spider",
          level: "86",
          materials: [{ name: COINS, quantity: 200000 }]
        },
        {
          id: "8136",
          name: "Troll guard",
          level: "90",
          materials: [{ name: COINS, quantity: 1000000 }]
        },
        {
          id: "8137",
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
          id: "8306",
          name: "Oak ladder",
          level: "68",
          materials: [{ name: OAK_PLANK, quantity: 5 }]
        },
        {
          id: "8307",
          name: "Teak ladder",
          level: "78",
          materials: [{ name: TEAK_PLANK, quantity: 5 }]
        },
        {
          id: "8308",
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
          id: "8125",
          name: "Decorative blood",
          level: "72",
          materials: [{ name: RED_DYE, quantity: 4 }]
        },
        {
          id: "8126",
          name: "Decorative pipe",
          level: "83",
          materials: [{ name: STEEL_BAR, quantity: 6 }]
        },
        {
          id: "8127",
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
          id: "8128",
          name: "Candle",
          level: "72",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: CANDLE, quantity: 4 }
          ]
        },
        {
          id: "8129",
          name: "Torch",
          level: "84",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: TORCH, quantity: 4 }
          ]
        },
        {
          id: "8130",
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
