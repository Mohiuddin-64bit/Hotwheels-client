const MyToyContent = ({myToy}) => {
  console.log(myToy)
  return (
    <>
      <tr>
        <td>
          <div className="font-bold">{myToy.toyName}</div>
          
        </td>
        <td>
          {myToy.quantity}
        </td>
        <td>$ {myToy.price}</td>
        <th>
          <button className="btn bg-custom-gradient">View Details</button>
        </th>
      </tr>
    </>
  );
};

export default MyToyContent;
