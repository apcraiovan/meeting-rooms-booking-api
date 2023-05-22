import request from 'supertest';
import app from '../../app';
import { connectToDatabase, sequelize } from '../../config/mysql.config';

beforeAll(async () => {
    await connectToDatabase(); 
  });
  
afterAll(async () => {
    await sequelize.close(); 
});


describe('MeetingController', () => {
  describe('getAllMeetingsByRoomId', () => {
    it('should get all meetings by roomId', async () => {
      const roomId = 4;

      const response = await request(app)
        .get('/meetings')
        .send({ roomId: roomId });

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
            id: 5,
            name: 'intalnire',
            description: 'descriere',
            startTime: "2023-05-19T13:52:09.000Z",
            endTime: "2023-05-19T13:52:09.000Z",
            roomId: 4
          }
      ]); 
    });
  });

  describe('getMeetingById', () => {
    it('should get meeting by id', async () => {

      const response = await request(app)
        .get('/meetings/5')

      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        {
            id: 5,
            name: 'intalnire',
            description: 'descriere',
            startTime: "2023-05-19T13:52:09.000Z",
            endTime: "2023-05-19T13:52:09.000Z",
            roomId: 4
          }
      ); 
    });
  });

  
});

