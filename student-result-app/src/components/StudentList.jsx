import React from 'react';
import './StudentList.css';

function StudentList({ students, onLoadStudents, onAddStudent, onEditStudent, onDeleteStudent, onViewDetails }) {
  return (
    <div className="student-list">
      <div className="list-header">
        <h2>Student Records</h2>
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={onLoadStudents}>
            📥 Load Students
          </button>
          <button className="btn btn-success" onClick={onAddStudent}>
            ➕ Add Student
          </button>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="no-data">
          <p>No students loaded. Click "Load Students" to fetch data.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.section}</td>
                  <td>{student.marks}</td>
                  <td>
                    <span className={`grade-badge grade-${student.grade.replace('+', 'plus')}`}>
                      {student.grade}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button
                        className="btn-action btn-view"
                        onClick={() => onViewDetails(student)}
                        title="View Details"
                      >
                        👁️
                      </button>
                      <button
                        className="btn-action btn-edit"
                        onClick={() => onEditStudent(student)}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        className="btn-action btn-delete"
                        onClick={() => onDeleteStudent(student.id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="list-footer">
        <p>Total Students: <strong>{students.length}</strong></p>
      </div>
    </div>
  );
}

export default StudentList;
