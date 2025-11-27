import React, { useState } from 'react';
import './StudentForm.css';

function StudentForm({ student, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: student?.name || '',
    section: student?.section || '',
    marks: student?.marks || '',
    grade: student?.grade || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateGrade = (marks) => {
    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 70) return 'B+';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    return 'F';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.section || !formData.marks) {
      alert('Please fill all required fields!');
      return;
    }

    const marks = parseInt(formData.marks);
    if (marks < 0 || marks > 100) {
      alert('Marks must be between 0 and 100!');
      return;
    }

    const studentData = {
      ...formData,
      marks: marks,
      grade: formData.grade || calculateGrade(marks)
    };

    onSubmit(studentData);
  };

  return (
    <div className="student-form">
      <div className="form-header">
        <h2>{student ? '✏️ Edit Student' : '➕ Add New Student'}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="section">Section *</label>
          <select
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="marks">Marks (0-100) *</label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            placeholder="Enter marks"
            min="0"
            max="100"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade (Auto-calculated)</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade || (formData.marks ? calculateGrade(parseInt(formData.marks)) : '')}
            onChange={handleChange}
            placeholder="Grade will be calculated"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-submit">
            {student ? 'Update Student' : 'Add Student'}
          </button>
          <button type="button" className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
