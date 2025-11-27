import React, { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mode, setMode] = useState('list');
  const [editingStudent, setEditingStudent] = useState(null);

  const loadStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
      alert('Students loaded successfully!');
    } catch (error) {
      alert('Failed to load students. Please try again.');
    }
  };

  const handleAddStudent = () => {
    setEditingStudent(null);
    setMode('form');
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setMode('form');
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setMode('details');
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully! Click "Load Students" to refresh.');
      } catch (error) {
        alert('Failed to delete student. Please try again.');
      }
    }
  };

  const handleFormSubmit = async (studentData) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, studentData);
        alert('Student updated successfully! Click "Load Students" to see changes.');
      } else {
        await createStudent(studentData);
        alert('Student added successfully! Click "Load Students" to see the new student.');
      }
      setMode('list');
      setEditingStudent(null);
    } catch (error) {
      alert('Failed to save student. Please try again.');
    }
  };

  const handleFormCancel = () => {
    setMode('list');
    setEditingStudent(null);
  };

  const handleBackToList = () => {
    setMode('list');
    setSelectedStudent(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 Student Result Management System</h1>
        <p>Add, View, Edit, and Delete Student Records</p>
      </header>

      <div className="app-content">
        {mode === 'list' && (
          <StudentList
            students={students}
            onLoadStudents={loadStudents}
            onAddStudent={handleAddStudent}
            onEditStudent={handleEditStudent}
            onDeleteStudent={handleDeleteStudent}
            onViewDetails={handleViewDetails}
          />
        )}

        {mode === 'form' && (
          <StudentForm
            student={editingStudent}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}

        {mode === 'details' && selectedStudent && (
          <StudentDetails
            student={selectedStudent}
            onBack={handleBackToList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
