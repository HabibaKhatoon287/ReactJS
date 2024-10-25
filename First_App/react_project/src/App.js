// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateItem from './components/CRUD/CreateItem';
// import UpdateItem from './components/CRUD/UpdateItem';
// import DeleteItem from './components/CRUD/DeleteItem';
import CounterApp from './components/counter1/CounterApp';
import FormSubmit from './components/form/FormContainer';     // Added Form Submission
import DataFetcher from './components/DataFetcherChildtoP/ParentComponent'; // Added Data Fetcher
import Navbar from './components/Navbar'; // Navigation bar
import LoginLogout from './components/COnditionalRendering/LoginLogout '

function App() {
  return (
    <Router> 
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Multi-App Project</h1>} />
          {/* Existing CRUD and Counter Routes */}
          <Route path="/crud/create" element={<CreateItem />} />
          {/* <Route path="/crud/update" element={<UpdateItem />} />
          <Route path="/crud/delete" element={<DeleteItem />} /> */}
          <Route path="/counter" element={<CounterApp />} />

          {/* New routes */}
          <Route path="/form" element={<FormSubmit />} />       {/* Form Submission */}
          <Route path="/data" element={<DataFetcher />} />      {/* Data Fetching */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
