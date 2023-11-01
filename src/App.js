import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnly from "./components/ReadOnly";
import EditFormer from "./components/EditFormer";

const App = () => {
  const [contacts, setContacts] = useState(data); //set function is used to update the deatails. usestate is the hook.
  const [addFormData, setAddFormData] = useState({ ///we initialize our function
    fullName: "",
    surName: "",
    email: "",
    phoneNumber: "",
    position: "",
    iden:"",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    surName: "",
    email: "",
    phoneNumber: "",
    position: "",
    iden:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");  //this will get the name of the user input
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      surName: addFormData.surName,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
      position: addFormData.position,
      iden:addFormData.iden,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      surName:editFormData.surName,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
      position: editFormData.position,
      iden:editFormData.iden,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      surName: contact.surName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      position: contact.position,
      iden:contact.iden,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <h1 class="subject" style={{textShadow:"4px 8px 16px black"}}> Employee Registration</h1>
    
    <form>
      <input
      onChange={(event) => setQuery(event.target.value)}
      type="text"
      name="search"
      placeholder="Search..."/>
    </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>ID</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.filter((contact) =>
            contact.fullName.toLowerCase().includes(query))
            .map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditFormer
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                  contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add your details</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          class= "row"
          required="required"
          placeholder="Enter a firstname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="surName"
          class= "row"
          required="required"
          placeholder="Enter an surname..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          class= "row"
          name="email"
          required="required"
          placeholder="Enter email..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="phoneNumber"
          class= "row"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        
        <input
          type="text"
          name="position"
          class= "row"
          required="required"
          placeholder="Enter your position..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="iden"
          class= "row"
          required="required"
          placeholder="Enter an id..."
          onChange={handleAddFormChange}
        />
        <button
        class="prof"
        style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"white", color:"black", boxShadow:"4px 8px 16px black"}}
         type="submit">Add</button>
      </form>
      <br></br>
      <ul > By submitting your personal data and registering you hereby confirm:</ul>
<ul class="prof"> That you have read and understood our Privacy Policy.</ul>
<ul class="prof">That you have no objection to us retaining your personal information in our database for future employment opportunities</ul>
<ul class="prof">That the information you have provided to us is true, correct and up to date.</ul><br></br>
<ul > I have read and accept the Terms and Conditions <input type="checkbox"></input></ul>
    </div>
  );
};

export default App;
