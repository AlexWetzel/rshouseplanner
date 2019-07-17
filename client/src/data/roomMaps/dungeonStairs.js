export const dungeonStairs = {
  doors: [
    //North
    [0, 37.5, 97, 37.5],
    //East
    [37.5, 0, 37.5, 97],
    //South
    [97, 37.5, 0, 37.5],
    //West
    [37.5, 97, 37.5, 0]
  ],
  hotSpots: [
    {
      name: "Door 1",
      position: [[12.5, 37.5, 82.5, 37.5]]
    },
    {
      name: "Door 2",
      position: [[82.5, 37.5, 12.5, 37.5]]
    },
    {
      name: "Guard 1",
      position: [[18.75, 18.75, 68.75, 68.75]]
    },
    {
      name: "Guard 2",
      position: [[68.75, 68.75, 18.75, 18.75]]
    },
    {
      name: "Decoration",
      position: [[17.5, 75, 77.5, 17.5], [77.5, 17.5, 17.5, 75]]
    },
    {
      name: "Lighting",
      position: [
        [17.5, 25, 77.5, 62.5],
        [17.5, 62.5, 77.5, 25],
        [77.5, 25, 17.5, 62.5],
        [77.5, 62.5, 17.5, 25]
      ]
    }
  ]
};
