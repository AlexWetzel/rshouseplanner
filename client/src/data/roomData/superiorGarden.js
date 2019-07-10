import {
  WATERING_CAN,
  LIMESTONE_BRICK,
  STEEL_BAR,
  TEAK_PLANK,
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  TOPIARY_HEDGE,
  SPIRIT_SAPLING,
  ANCIENT_CRYSTAL,
  MUSHROOM,
  FAIRY_ENCHANTMENT,
  BUCKET_OF_WATER,
  SOUL_RUNE,
  BODY_RUNE,
  STAMINA_POTION_4,
  PRAYER_POTION_4,
  SUPER_RESTORE_4,
  ANTI_VENOM_4,
  BLOOD_RUNE,
  BUCKET_OF_SAND,
  PINK_DYE,
  BAGGED_NICE_TREE,
  SUPERCOMPOST,
  BLUE_DYE,
  MAGIC_SECATEURS,
  GRANITE_5KG,
  ONYX,
  FIRE_RUNE,
  LAVA_RUNE,
  REDWOOD_LOGS,
  TOKTZ_MEJ_KAL,
  TZHAAR_KET_OM,
  TOKTZ_XIL_UL
} from "../itemData/itemConstatnts";

export const superiorGarden = {
  name: "Superior garden",
  level: "65",
  price: "75000",
  type: "outdoor",
  hotSpots: [
    {
      name: "Natural teleport",
      builds: [
        {
          name: "Spirit tree",
          level: "75",
          materials: [
            { name: SPIRIT_SAPLING, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Obelist",
          level: "80",
          materials: [
            { name: ANCIENT_CRYSTAL, quantity: 4 },
            { name: MARBLE_BLOCK, quantity: 4 }
          ]
        },
        {
          name: "Fairy ring",
          level: "85",
          materials: [
            { name: MUSHROOM, quantity: 10 },
            { name: FAIRY_ENCHANTMENT, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Spirit tree & fairy ring",
          level: "95",
          materials: [
            { name: SPIRIT_SAPLING, quantity: 1 },
            { name: MUSHROOM, quantity: 10 },
            { name: FAIRY_ENCHANTMENT, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Topiary",
      builds: [
        {
          name: "Topiary",
          level: "65",
          materials: [
            { name: TOPIARY_HEDGE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Pool",
      builds: [
        {
          name: "Restoration pool",
          level: "65",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 5 },
            { name: BUCKET_OF_WATER, quantity: 5 },
            { name: SOUL_RUNE, quantity: 1000 },
            { name: BODY_RUNE, quantity: 1000 }
          ]
        },
        {
          name: "Revitalisation pool",
          level: "70",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 5 },
            { name: BUCKET_OF_WATER, quantity: 5 },
            { name: SOUL_RUNE, quantity: 1000 },
            { name: BODY_RUNE, quantity: 1000 },
            { name: STAMINA_POTION_4, quantity: 10 }
          ]
        },
        {
          name: "Rejuvination pool",
          level: "80",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 5 },
            { name: BUCKET_OF_WATER, quantity: 5 },
            { name: SOUL_RUNE, quantity: 1000 },
            { name: BODY_RUNE, quantity: 1000 },
            { name: STAMINA_POTION_4, quantity: 10 },
            { name: PRAYER_POTION_4, quantity: 10 }
          ]
        },
        {
          name: "Fancy rejuvination pool",
          level: "85",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 5 },
            { name: BUCKET_OF_WATER, quantity: 5 },
            { name: SOUL_RUNE, quantity: 1000 },
            { name: BODY_RUNE, quantity: 1000 },
            { name: STAMINA_POTION_4, quantity: 10 },
            { name: PRAYER_POTION_4, quantity: 10 },
            { name: SUPER_RESTORE_4, quantity: 10 },
            { name: MARBLE_BLOCK, quantity: 2 }
          ]
        },
        {
          name: "Ornate rejuvination pool",
          level: "90",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 5 },
            { name: BUCKET_OF_WATER, quantity: 5 },
            { name: SOUL_RUNE, quantity: 1000 },
            { name: BODY_RUNE, quantity: 1000 },
            { name: STAMINA_POTION_4, quantity: 10 },
            { name: PRAYER_POTION_4, quantity: 10 },
            { name: SUPER_RESTORE_4, quantity: 10 },
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: ANTI_VENOM_4, quantity: 10 },
            { name: GOLD_LEAF, quantity: 5 },
            { name: BLOOD_RUNE, quantity: 1000 }
          ]
        }
      ]
    },
    {
      name: "Theme",
      builds: [
        {
          name: "Zen theme",
          level: "65",
          materials: [
            { name: BUCKET_OF_SAND, quantity: 6 },
            { name: PINK_DYE, quantity: 1 },
            { name: BAGGED_NICE_TREE, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Otherworldly theme",
          level: "75",
          materials: [
            { name: SUPERCOMPOST, quantity: 8 },
            { name: BLUE_DYE, quantity: 1 },
            { name: MUSHROOM, quantity: 4 },
            { name: MAGIC_SECATEURS, quantity: 1 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        },
        {
          name: "Volcanic theme",
          level: "85",
          materials: [
            { name: GRANITE_5KG, quantity: 2 },
            { name: ONYX, quantity: 6 },
            { name: FIRE_RUNE, quantity: 1000 },
            { name: LAVA_RUNE, quantity: 2000 },
            { name: WATERING_CAN, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Fencing",
      builds: [
        {
          name: "Redwood fence",
          level: "75",
          materials: [
            { name: REDWOOD_LOGS, quantity: 2 },
            { name: STEEL_BAR, quantity: 2 }
          ]
        },
        {
          name: "Marble wall",
          level: "79",
          materials: [{ name: MARBLE_BLOCK, quantity: 8 }]
        },
        {
          name: "Obsidian fence",
          level: "83",
          materials: [
            { name: TOKTZ_MEJ_KAL, quantity: 10 },
            { name: TZHAAR_KET_OM, quantity: 2 },
            { name: TOKTZ_XIL_UL, quantity: 25 }
          ]
        }
      ]
    },
    {
      name: "Seating",
      builds: [
        {
          name: "Teak garden bench",
          level: "66",
          materials: [{ name: TEAK_PLANK, quantity: 6 }]
        },
        {
          name: "Gnome bench",
          level: "77",
          materials: [{ name: MAHOGANY_PLANK, quantity: 6 }]
        },
        {
          name: "Marble decorative bench",
          level: "88",
          materials: [{ name: MARBLE_BLOCK, quantity: 6 }]
        },
        {
          name: "Obsidian decorative bench",
          level: "98",
          materials: [
            { name: MARBLE_BLOCK, quantity: 3 },
            { name: ONYX, quantity: 1 },
            { name: FIRE_RUNE, quantity: 250 },
            { name: LAVA_RUNE, quantity: 500 }
          ]
        }
      ]
    }
  ]
};
