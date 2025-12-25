import RoomCart from "./RoomCart";

interface RoomDetail {
  type: string;
  price: number;
  availability: boolean;
}
interface RoomPropList {
  room: RoomDetail[];
}
function RoomList({ room }: RoomPropList) {
  return (
    <>
      <div className="flex">
        {room.map((detail, index) => {
          return (
            <div className="flex m-3">
              <RoomCart key={index} room={detail} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RoomList;
