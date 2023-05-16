const express = require("express");
const { Request, Response } = require("express");
const { sequelize, Room } = require("./models/rooms");

const app = express();
const PORT = 3000;

// Parse JSON requests
app.use(express.json());

// Connect to the database
sequelize
  .sync()
  .then(function () {
    console.log("Connected to the database.");
  })
  .catch(function () {
    console.error("Unable to connect to the database:");
  });

// Create a new room
// app.post('/rooms', async (req: any, res: any) => {
//     try {
//       const { name, capacity, description } = req.body;

//       // Create a new room
//       const newRoom = await Room.create({ name, capacity, description });

//       res.status(201).json(newRoom);
//     } catch (error) {
//       console.error('Error creating room:', error);
//       res.status(500).json({ error: 'Unable to create room' });
//     }
//   });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
