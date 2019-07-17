export const combatRoom = {
  doors: [
    //North
    [0, 37.5, 97, 37.5],
    //East
    [37.5, 0, 37.5, 97],
    //South
    [97, 37.5, 0, 37.5]
  ],
  hotSpots: [
    {
      name: "Boxing ring",
      position: [[25, 25, 25, 25]]
    },
    {
      name: "Combat dummy",
      position: [[75, 0, 12.5, 87.5]]
    },
    {
      name: "Rack",
      position: [[37.5, 87.5, 37.5, 0]]
    },
    {
      name: "Decoration",
      position: [[25, 92.5, 62.5, 0], [62.5, 92.5, 25, 0]]
    }
  ]
};
