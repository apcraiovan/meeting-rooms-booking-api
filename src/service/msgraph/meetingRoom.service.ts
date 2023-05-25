import axios from "axios";

import {CreateMeetingRoomDto} from "../../dto/msgraph/meetingRoomDtos/create.meetingRoom.dto";
import {DeleteMeetingRoomDto} from "../../dto/msgraph/meetingRoomDtos/delete.meetingRoom.dto";
import {UpdateMeetingRoomDto} from "../../dto/msgraph/meetingRoomDtos/update.meetingRoom.dto";
import {MS_GRAPH_BASIC_PATHS} from "../../constants/constants";
import {MsGraphUtils} from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class MeetingRoomsService {


    async getMeetingRoomById(roomId: string) {
        try {
            const headersConfig = await msGraphUtils.getHeadersConfig();
            const meetingRooms = await axios.get(
                MS_GRAPH_BASIC_PATHS.USERS + roomId,
                headersConfig
            );
            if (meetingRooms !== undefined) return meetingRooms;
        } catch (err) {
            console.error(err);
        }
    }

    async getAllMeetingRooms(location: string) {
        try {
            const headersConfig = await msGraphUtils.getHeadersConfig();
            console.log(location);
            const meetingRooms = await axios.get(
                `https://graph.microsoft.com/v1.0/users?$count=true&$search="displayName:room"&$filter=startsWith(mail,'${location}')&$orderBy=displayName&$select=id,displayName,mail`,
                headersConfig
            );
            if (meetingRooms !== undefined) return meetingRooms;
        } catch (err) {
            // console.error(err);
        }
    }

    async createNewMeetingRoom(createMeetingRoomDto: CreateMeetingRoomDto) {
        try {
            const headersConfig = await msGraphUtils.getHeadersConfig();
            const newMeetingRoom = await axios.post(
                MS_GRAPH_BASIC_PATHS.USERS,
                createMeetingRoomDto,
                headersConfig
            );
            if (newMeetingRoom !== undefined) return newMeetingRoom.data;
        } catch (err) {
            console.error(err);
        }
    }


    async deleteMeetingRoom(
        deleteMeetingRoomDto: DeleteMeetingRoomDto
    ): Promise<void> {
        try {
            const headersConfig = await msGraphUtils.getHeadersConfig();
            const deletedMeetingRoom = await axios.delete(
                MS_GRAPH_BASIC_PATHS.USERS + deleteMeetingRoomDto.id,
                headersConfig
            );
            return deletedMeetingRoom.data;
        } catch (err) {
            console.error(err);
        }
    }

    async updateMeetingRoom(
        updateMeetingRoomDto: UpdateMeetingRoomDto
    ): Promise<void> {
        try {
            const headersConfig = await msGraphUtils.getHeadersConfig();
            const {currentRoomData, newRoomData} = updateMeetingRoomDto;
            const updatedRoom = await axios.patch(
                MS_GRAPH_BASIC_PATHS.USERS + currentRoomData.id,
                newRoomData,
                headersConfig
            );
            return
        } catch (err) {
            console.error(err);
        }
    }
}
