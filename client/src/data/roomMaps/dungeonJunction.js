export const dungeonJunction = {
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
    name: "Trap 1",
    position: [[25, 37.5, 62.5, 37.5]]
  },
  {
    name: "Trap 2",
    position: [[62.5, 37.5, 25, 37.5]]
  },

  {
    name: "Guard",
    position: [[43.25, 43.25, 43.25, 43.25]]
  },
  {
    name: "Decoration",
    position: [
      [37.5, 12.5, 57., 75],
      [57.5, 75, 37.5, 12.5]
    ]
  },
  {
    name: "Lighting",
    position: [
      [17.5, 37.5, 75, 57.5],
      [57.5, 17.5, 37.5, 75],
      [75, 57.5, 17.5, 37.5],
      [37.5, 75, 57.5, 17.5]
    ]
  }
]}