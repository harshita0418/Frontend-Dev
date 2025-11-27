import React from 'react';
import './StudentDetails.css';

function StudentDetails({ student, onBack }) {
  return (
    <div className="student-details">
      <div className="details-header">
        <h2>📋 Student Details</h2>
        <button className="btn btn-back" onClick={onBack}>
          ← Back to List
        </button>
      </div>

      <div className="details-card">
        <div className="detail-row">
          <span className="detail-label">Student ID:</span>
          <span className="detail-value">{student.id}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Full Name:</span>
          <span className="detail-value">{student.name}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Section:</span>
          <span className="detail-value">{student.section}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Marks Obtained:</span>
          <span className="detail-value">{student.marks} / 100</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Grade:</span>
          <span className={`grade-badge-large grade-${student.grade.replace('+', 'plus')}`}>
            {student.grade}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Percentage:</span>
          <span className="detail-value">{student.marks}%</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Status:</span>
          <span className={`status-badge ${student.marks >= 50 ? 'pass' : 'fail'}`}>
            {student.marks >= 50 ? 'PASS' : 'FAIL'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
