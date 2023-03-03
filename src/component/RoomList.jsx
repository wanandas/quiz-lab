import styled from "@emotion/styled";

export const RoomList = ({ rooms = [] }) => {
  return (
    <RoomListWrapper>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.roomNumber}>
            Room {room.roomNumber} ({room.capacity})
          </li>
        ))}
      </ul>
    </RoomListWrapper>
  );
};

const RoomListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
