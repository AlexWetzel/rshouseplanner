export const garden = {
  name: "Garden",
  level: "1",
  price: "1000",
  hotSpots: [
    {
      name: "Centrepiece",
      builds: [
        {
          name: "Exit Portal",
          level: "1",
          materials: [{ name: "Iron Bar", quantity: 10 }]
        },
        {
          name: "Decorative Rock",
          level: "5",
          materials: [{ name: "Limestone Brick", quantity: 5 }]
        },
        {
          name: "Pond",
          level: "10",
          materials: [{ name: "Soft Clay", quantity: 10 }]
        },
        {
          name: "Imp Statue",
          level: "15",
          materials: [
            { name: "Limestone Brick", quantity: 5 },
            { name: "Soft Clay", quantity: 5 }
          ]
        },
        {
          name: "Dungeon Entrance",
          level: "70",
          materials: [{ name: "Marble Brick", quantity: 1 }]
        }
      ]
    }
  ]
}