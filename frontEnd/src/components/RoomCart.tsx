interface RoomDetail {
  type: string;
  price: number;
  availability: boolean;
}
interface RoomCartProp {
  room: RoomDetail;
}

function RoomCart({ room }: RoomCartProp) {
  return (
    <>
      {/* Room Type: {room.type}
      Room Price: {room.price}
      Room Availbility: {room.availability} */}
      {/* {room.map((obj, indx) => {
        return (
          <div key={indx}>
            <p>Room Type: {obj.type}</p>
            <p>Room Price: {obj.price}</p>
            <p>
              Room Availaability;{" "}
              {obj.availability ? "Available" : "NOt Available"}
            </p>
          </div>
        );
      })} */}
      <div
        className={`p-4 mb-4 border rounded transition transform hover:scale-105 ${
          room.availability ? "bg-green-100" : "bg-red-100"
        }`}
      >
        <p className="font-semibold text-gray-800">Type: {room.type}</p>
        <p className="text-gray-700">Price: ₹{room.price}</p>
        <p
          className={`font-bold ${
            room.availability ? "text-green-600" : "text-red-600"
          }`}
        >
          {room.availability ? "Available" : "Not Available"}
        </p>
      </div>
    </>
  );
}

export default RoomCart;
