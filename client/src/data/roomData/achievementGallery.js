import {
  MARBLE_BLOCK,
  MAHOGANY_PLANK,
  GOLD_LEAF,
  MAGIC_STONE,
  STEEL_BAR,
  LIMESTONE_BRICK,
  ANCIENT_SIGNET,
  PHARAOHS_SCEPTRE,
  LUNAR_SIGNET,
  ASTRAL_RUNE,
  ARCEUUS_SIGNET,
  BLOOD_RUNE,
  SOUL_RUNE,
  PAPYRUS,
  ENCHANTED_GEM,
  BOLT_OF_CLOTH,
  GAMES_NECKLACE_8,
  RING_OF_DUELING_8,
  SKILLS_NECKLACE_4,
  COMBAT_BRACELET_4,
  AMULET_OF_GLORY_4,
  RING_OF_WEALTH_5,
  MOLTEN_GLASS,
  MYSTERIOUS_EMBLEM_10,
  COINS
} from "../itemData/itemConstatnts";

export const achievementGallery = {
  name: "Achievement gallery",
  level: "80",
  price: "200000",
  type: "indoor",
  hotSpots: [
    {
      name: "Altar",
      builds: [
        {
          name: "Ancient altar",
          level: "80",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 10 },
            { name: MAGIC_STONE, quantity: 1 },
            { name: ANCIENT_SIGNET, quantity: 1 },
            { name: PHARAOHS_SCEPTRE, quantity: 1 }
          ]
        },
        {
          name: "Lunar altar",
          level: "80",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 10 },
            { name: MAGIC_STONE, quantity: 1 },
            { name: LUNAR_SIGNET, quantity: 1 },
            { name: ASTRAL_RUNE, quantity: 10000 }
          ]
        },
        {
          name: "Dark altar",
          level: "80",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 10 },
            { name: MAGIC_STONE, quantity: 1 },
            { name: ARCEUUS_SIGNET, quantity: 1 },
            { name: BLOOD_RUNE, quantity: 5000 },
            { name: SOUL_RUNE, quantity: 5000 }
          ]
        },
        {
          name: "Occult altar",
          level: "80",
          materials: [
            { name: LIMESTONE_BRICK, quantity: 10 },
            { name: MAGIC_STONE, quantity: 1 },
            { name: ANCIENT_SIGNET, quantity: 1 },
            { name: LUNAR_SIGNET, quantity: 1 },
            { name: ARCEUUS_SIGNET, quantity: 1 },
            { name: PHARAOHS_SCEPTRE, quantity: 1 },
            { name: ASTRAL_RUNE, quantity: 10000 },
            { name: BLOOD_RUNE, quantity: 5000 },
            { name: SOUL_RUNE, quantity: 5000 }
          ]
        }
      ]
    },
    {
      name: "Adventure log",
      builds: [
        {
          name: "Mahogany adventure log",
          level: "83",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: PAPYRUS, quantity: 2 },
            { name: ENCHANTED_GEM, quantity: 1 }
          ]
        },
        {
          name: "Gilded adventure log",
          level: "88",
          materials: [
            { name: MAHOGANY_PLANK, quantity: 3 },
            { name: GOLD_LEAF, quantity: 2 },
            { name: ENCHANTED_GEM, quantity: 1 }
          ]
        },
        {
          name: "Marble adventure log",
          level: "93",
          materials: [
            { name: MARBLE_BLOCK, quantity: 2 },
            { name: LIMESTONE_BRICK, quantity: 4 },
            { name: ENCHANTED_GEM, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Jewellery box",
      builds: [
        {
          name: "Basic jewellery box",
          level: "81",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: STEEL_BAR, quantity: 1 },
            { name: GAMES_NECKLACE_8, quantity: 3 },
            { name: RING_OF_DUELING_8, quantity: 3 }
          ]
        },
        {
          name: "Fancy jewellery box",
          level: "86",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: STEEL_BAR, quantity: 1 },
            { name: GAMES_NECKLACE_8, quantity: 3 },
            { name: RING_OF_DUELING_8, quantity: 3 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: SKILLS_NECKLACE_4, quantity: 5 },
            { name: COMBAT_BRACELET_4, quantity: 5 }
          ]
        },
        {
          name: "Ornate jewellery box",
          level: "91",
          materials: [
            { name: BOLT_OF_CLOTH, quantity: 1 },
            { name: STEEL_BAR, quantity: 1 },
            { name: GAMES_NECKLACE_8, quantity: 3 },
            { name: RING_OF_DUELING_8, quantity: 3 },
            { name: GOLD_LEAF, quantity: 3 },
            { name: SKILLS_NECKLACE_4, quantity: 5 },
            { name: COMBAT_BRACELET_4, quantity: 5 },
            { name: AMULET_OF_GLORY_4, quantity: 8 },
            { name: RING_OF_WEALTH_5, quantity: 8 }
          ]
        }
      ]
    },
    {
      name: "Boss lair display",
      builds: [
        {
          name: "Boss lair display",
          level: "87",
          materials: [
            { name: STEEL_BAR, quantity: 4 },
            { name: MOLTEN_GLASS, quantity: 5 },
            { name: MAHOGANY_PLANK, quantity: 10 }
          ]
        }
      ]
    },
    {
      name: "Mounted display",
      builds: [
        {
          name: "Mounted emblem",
          level: "80",
          materials: [
            { name: MARBLE_BLOCK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: MYSTERIOUS_EMBLEM_10, quantity: 1 }
          ]
        },
        {
          name: "Mounted coins",
          level: "80",
          materials: [
            { name: MARBLE_BLOCK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 },
            { name: COINS, quantity: 100000000 }
          ]
        },
        {
          name: "Mounted coins",
          level: "80",
          materials: [
            { name: MARBLE_BLOCK, quantity: 1 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    },
    {
      name: "Quest list",
      builds: [
        {
          name: "Quest list",
          level: "80",
          materials: [
            { name: PAPYRUS, quantity: 10 },
            { name: GOLD_LEAF, quantity: 1 }
          ]
        }
      ]
    }
  ]
};
