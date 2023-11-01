import React from "react";

const EditFormer = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          name="surName"
          required="required"
          placeholder="Enter an surname..."
          value={editFormData.surName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="number"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
        </td>
     
      
      <td>
      <input
          type="text"
          name="position"
          required="required"
          placeholder="Enter your positon..."
          value={editFormData.position}
          onChange={handleEditFormChange}
        ></input>
<input
          type="number"
          name="iden"
          required="required"
          placeholder="Enter an id..."
          value={editFormData.iden}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditFormer;