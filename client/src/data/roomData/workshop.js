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
  ROPE,
  STEEL_BAR,
  MOLTEN_GLASS
} from "../itemData/itemConstatnts";

export const workshop = {
  name: "Workshop",
  level: "15",
  price: "10000",
  type: "indoor",
  hotSpots: [
    {
      name: "Workbench",
      builds: [
        {
          name: "Wooden workbench",
          level: "17",
          materials: [
            { name: PLANK, quantity: 5 },
            { name: STEEL_NAILS, quantity: 5 }
          ]
        },
        {
          name: "Oak workbench",
          level: "32",
          materials: [{ name: OAK_PLANK, quantity: 5 }]
        },
        {
          name: "Steel framed workbench",
          level: "46",
          materials: [
            { name: OAK_PLANK, quantity: 6 },
            { name: STEEL_BAR, quantity: 4 }
          ]
        },
        {
          name: "Bench with vice",
          level: "62",
          materials: [
            { name: OAK_PLANK, quantity: 7 },
            { name: STEEL_BAR, quantity: 5 }
          ]
        },
        {
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
          name: "Crafting table 1",
          level: "16",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Crafting table 2",
          level: "25",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: MOLTEN_GLASS, quantity: 1 }
          ]
        },
        {
          name: "Crafting table 3",
          level: "34",
          materials: [
            { name: OAK_PLANK, quantity: 4 },
            { name: MOLTEN_GLASS, quantity: 3 }
          ]
        },
        {
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
          name: "Repair bench",
          level: "15",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Whetstone",
          level: "35",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Carved oak bench",
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
          name: "Tool store 1",
          level: "15",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Tool store 2",
          level: "25",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
          name: "Tool store 3",
          level: "35",
          materials: [{ name: OAK_PLANK, quantity: 6 }]
        },
        {
          name: "Tool store 4",
          level: "44",
          materials: [{ name: OAK_PLANK, quantity: 8 }]
        },
        {
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
          name: "Pluming stand",
          level: "16",
          materials: [{ name: OAK_PLANK, quantity: 2 }]
        },
        {
          name: "Shield easel",
          level: "41",
          materials: [{ name: OAK_PLANK, quantity: 4 }]
        },
        {
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
