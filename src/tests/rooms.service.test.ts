// import {
//   deleteRoomById,
//   getAllRooms,
//   getRoomById,
// } from "../services/rooms.service";

// describe("getAllRooms", () => {
//   it("should retrieve all rooms", async () => {
//     const rooms = await getAllRooms();

//     expect(rooms.length).toBeGreaterThan(0);

//     const expectedRooms = [
//       {
//         name: "Colective IQ Room",
//         capacity: 6,
//         description:
//           "This room is located on the right side of the office, it is a large meeting room, perfect for presentations and discussing ideas",
//       },

//       {
//         name: "High Table Room",
//         capacity: 4,
//         description:
//           "This room is located on the right side of the office, it is a small meeting room, perfect for fast meeting calls",
//       },
//       {
//         name: "Presentation Success Room",
//         capacity: 8,
//         description:
//           "This room is located on the right side of the office, it is large, perfect for showing the functionality of a successfully implemented idea",
//       },
//       {
//         name: "Focus Room",
//         capacity: 3,
//         description:
//           "This Room is located on the left side of the office, it is small, perfect for taking some time focusing on an idea and coming up with an implementation",
//       },
//       {
//         name: "Room for Growth",
//         capacity: 4,
//         description:
//           "This room is located on the left side of the office, near the kitchen, it is small, perfect for debating and brainstorming for ideas",
//       },
//     ];

//     //expect(rooms).toEqual(expect.arrayContaining(expectedRooms));
//     expect(rooms).toEqual(
//       expect.arrayContaining(
//         expectedRooms.map((expectedRoom) =>
//           expect.objectContaining(expectedRoom)
//         )
//       )
//     );
//   });
// });

// describe("getRoomById", () => {
//   it("should retrieve a room by its ID", async () => {
//     const roomId = 1;

//     const room = await getRoomById(roomId);

//     expect(room).toBeDefined();
//     expect(room.id).toBe(roomId);
//   });

//   it("should return null if room ID does not exist", async () => {
//     const roomId = 50; // Replace with a non-existent ID

//     const room = await getRoomById(roomId);

//     expect(room).toBeNull();
//   });
// });

// describe("deleteRoomById", () => {
//   it("should delete a room by its ID", async () => {
//     const roomId = 1; // Replace with the ID of the room you want to delete

//     const result = await deleteRoomById(roomId);

//     expect(result).toBe(true);

//     // Verify that the room has been deleted
//     const room = await getRoomById(roomId);
//     expect(room).toBeNull();
//   });

//   it("should return false if room ID does not exist", async () => {
//     const roomId = 1; // Replace with a non-existent ID

//     const result = await deleteRoomById(roomId);

//     expect(result).toBe(false);
//   });
// });
