import React from "react";

const ReadOnly = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.surName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>{contact.iden}</td>
      
      <td>
        <button
          type="button" 
          class="prof"
            style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"white", color:"black", boxShadow:"4px 8px 16px black"}}
          onClick={(event) => handleEditClick(event, contact)}
        >Edit
        </button>

        <button type="button" 
        class="prof"
        onClick={() =>handleDeleteClick(contact.id)}
        style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"maroon", color:"black", boxShadow:"4px 8px 16px black"}}>
          Delete
        </button>

      </td>
    </tr>
  );
};

export default ReadOnly;