// import React, { useState } from 'react';

// function FormSubmit() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const [submittedData, setSubmittedData] = useState(null);
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData); 
//     setFormData({ name: '', email: '' });
//   };

//   return (
//     <div>
//       <h2>Form Submission</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Submitted Data</h3>
//           <p> Name: {submittedData.name} </p>
//           <p> Email: {submittedData.email} </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FormSubmit;
//Parent component
import React, { useState } from 'react';
import FormSubmit from './FormSubmit'; // Import the child component

function FormContainer() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>Form Submission</h2>
      
      <FormSubmit onFormSubmit={handleFormSubmit} />

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data</h3>
          <p> Name: {submittedData.name} </p>
          <p> Email: {submittedData.email} </p>
        </div>
      )}
    </div>
  );
}

export default FormContainer;
