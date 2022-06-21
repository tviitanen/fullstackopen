import React from "react";

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const totalEx = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>
      <strong>Total of {totalEx} exercises</strong>
    </p>
  );
};

export default Course;
