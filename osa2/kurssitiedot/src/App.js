const Header = (props) => {
  console.log(props)

  return (
    <div>
      <h1>{props.courseName}</h1>
      </div>
      )
  }

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
      </div>
      )
  }

const Total = (props) => {
  console.log(props)

  return (
    <div>
      <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
      </div>
      )
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header courseName={course.name}/>
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
      <Total part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
    </>
  )
}

export default App;
