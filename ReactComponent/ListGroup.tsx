import "./Style.css";
function ListGroup() {
  const Members = [
    "Meklit",
    "Maedot",
    "Melat",
    "Marsilas",
    "Meklit",
    "Medhanit",
    "Arsema",
    "Mekdes",
    "Gelila",
    "Edom",
  ];

  return (
    <>
      <h1>Members</h1>
      <ul className="list-group">
        {Members.map((Member) => (
          <li key={Member}>{Member}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;