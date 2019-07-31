import {
  PLANK,
  STEEL_NAILS,
  OAK_PLANK,
  BOLT_OF_CLOTH,
  LIMESTONE_BRICK,
  STEEL_BAR,
  MOLTEN_GLASS
} from "../itemData/itemConstatnts";

export const workshop = {
  id: "8406",
  name: "Workshop",
  level: "15",
  price: "10000",
  type: "indoor",
  hotSpots: [
    {
      name: "Workbench",
      builds: [
        {
          id: "8375",
          name: "Wooden workbench",
          level: "17",
          materials: [
            { name: PLANK, quantity: 5 },
            { name: STEEL_NAILS, quantity: 5 }
          ]
        },
        {
          id: "8376",
          name: "Oak workbench",
          level: "32",
          materials: [{ name: OAK_PLANK, quantity: 5 }]
        },
        {
          id: "8377",
          name: "Steel framed workbench",
          level: "46",
          materials: [
            { name: OAK_PLANK, quantity: 6 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          id: "8378",
          name: "Bench with vice",
          level: "62",
          materials: [
            { name: OAK_PLANK, quantity: 7 },
            { name: STEEL_BAR, quantity: 5 }
          ]
        },
        {
          id: "8379",
          name: "Bench with lathe",
          level: "77",
          materials: [
            { name: OAK_PLANK, quantity: 9 },
            { name: STEEL_BAR, quantity: 6 }
          ]
        }
      ]
    },
    {
      name: "Crafting table",
      builds: [
        {
          id: "8380",
          name: "Crafting table 1",
          level: "16",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          id: "8381",
          name: "Crafting table 2",
          level: "25",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          id: "8382",
          name: "Crafting table 3",
          level: "34",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: MOLTEN_GLASS, quantity: 3 }
          ]
        },
        {
          id: "8383",
          name: "Crafting table 4",
          level: "42",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: MOLTEN_GLASS, quantity: 5 }
          ]
        }
      ]
    },
    {
      name: "Repair benches",
      builds: [
        {
          id: "8389",
          name: "Repair bench",
          level: "15",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8390",
          name: "Whetstone",
          level: "35",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          id: "8391",
          name: "Armour stand",
          level: "55",
          materials: [
            { name: OAK_PLANK, quantity: 8 },
            { name: LIMESTONE_BRICK, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Tool store",
      builds: [
        {
          id: "8384",
          name: "Tool store 1",
          level: "15",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8385",
          name: "Tool store 2",
          level: "25",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          id: "8386",
          name: "Tool store 3",
          level: "35",
          materials: [{ name: OAK_PLANK, quantity: 6 }]
        },
        {
          id: "8387",
          name: "Tool store 4",
          level: "44",
          materials: [{ name: OAK_PLANK, quantity: 8 }]
        },
        {
          id: "8388",
          name: "Tool store 5",
          level: "55",
          materials: [{ name: OAK_PLANK, quantity: 10 }]
        }
      ]
    },
    {
      name: "Heraldry stand",
      builds: [
        {
          id: "8392",
          name: "Pluming stand",
          level: "16",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          id: "8393",
          name: "Shield easel",
          level: "41",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          id: "8394",
          name: "Banner easel",
          level: "66",
          materials: [
            { name: OAK_PLANK, quantity: 8 },
            { name: BOLT_OF_CLOTH, quantity: 2 }
          ]
        }
      ]
    }
  ]
};
