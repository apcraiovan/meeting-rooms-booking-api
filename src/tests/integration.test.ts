import request from 'supertest';
import app from '../app';

describe('GetMeetingsByRoomID', () => {
    it('should get all meetings by RoomID', async () => {
      const roomID = 1;
  
      const response = await request(app)
        .get('/meetings')
        .send({ RoomID: roomID });
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });


