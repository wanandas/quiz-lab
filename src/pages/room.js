import styles from "@/styles/Home.module.css";
import styled from "@emotion/styled";

import Head from "next/head";
import { useState } from "react";
import { RoomList } from "../component/RoomList";
export default function Room() {
  const rooms = [
    {
      roomNumber: 1,
      capacity: 2,
      availableTimeSlots: [
        {
          date: "2021-01-01",
          startTime: "09:00",
          endTime: "10:00",
        },
        {
          date: "2021-01-01",
          startTime: "10:00",
          endTime: "11:00",
        },
      ],
    },
    {
      roomNumber: 2,
      capacity: 2,
      availableTimeSlots: [
        {
          date: "2021-01-01",
          startTime: "09:00",
          endTime: "10:00",
        },
        {
          date: "2021-01-01",
          startTime: "10:00",
          endTime: "11:00",
        },
      ],
    },
  ];
  const [availableRooms, setAvailableRooms] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [capacity, setCapacity] = useState(0);

  const getAvailableRooms = (rooms, startTime, endTime, capacity) => {
    const availableRooms = rooms.filter((room) => {
      return room.availableTimeSlots.some((timeSlot) => {
        return timeSlot.startTime === startTime && timeSlot.endTime === endTime;
      });
    });

    if (capacity > 0) {
      return availableRooms.filter((room) => room.capacity >= capacity);
    }

    return availableRooms;
  };

  const handleSearch = (startTime, endTime, capacity) => {
    const availableRooms = getAvailableRooms(
      rooms,
      startTime,
      endTime,
      capacity
    );
    setAvailableRooms(availableRooms);
  };

  return (
    <>
      <Head>
        <title>Room</title>
        <meta name="description" content="Room" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Room</h1>
        <SearchTimeWrapper>
          <label htmlFor="startTime">Start Time</label>
          <input
            id="startTime"
            type="time"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />

          <label htmlFor="endTime">End Time</label>
          <input
            id="endTime"
            type="time"
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />

          <label htmlFor="capacity">Capacity</label>
          <input
            id="capacity"
            type="number"
            onChange={(e) => {
              setCapacity(e.target.value);
            }}
          />

          <button onClick={() => handleSearch(startTime, endTime, capacity)}>
            {" "}
            Search{" "}
          </button>
        </SearchTimeWrapper>

        <AvailableRoomsWrapper>
          <RoomList rooms={availableRooms} />
        </AvailableRoomsWrapper>
        <div></div>
      </main>
    </>
  );
}

const AvailableRoomsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SearchTimeWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
`;
