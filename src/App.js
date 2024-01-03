import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const questions = [
    {
      question: "What is React.js?",
      options: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "An operating system",
        "A database management system",
      ],
      correctAnswer: " A JavaScript library for building user interfaces",
    },
    {
      question: "Which command is used to create a new React application?",
      options: [
        "create-react-app",
        "new-react-app",
        "react-create-app",
        "generate-react-app",
      ],
      correctAnswer: "create-react-app",
    },
    {
      question: "In React, which function is used to render acomponent?",
      options: ["display()", "show()", "render()", "output()"],
      correctAnswer: "render()",
    },
    {
      question: "What is JSX in React?",
      options: [
        "JavaScript External XML",
        "JavaScript extension",
        "Java XML",
        "JSX is not used in React",
      ],
      correctAnswer: "JavaScript extension",
    },
    {
      question: "How do you create a functional componentin React?",
      options: [
        "class MyComponent extends Component { }",
        "const MyComponent = () => { }",
        "create MyComponent() { }",
        "non",
      ],
      correctAnswer: "const MyComponent = () => { }",
    },
    {
      question: "What is the purpose of setState in React?",
      options: [
        "To update the browsers URL",
        "To change the state of a component",
        "To define the initial state of a component",
        "To include an external JavaScript file",
      ],
      correctAnswer: "To change the state of a component",
    },
    {
      question:
        "Which lifecycle method is called after acomponent is rendered for the first time?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "componentWillMount",
      ],
      correctAnswer: "componentDidMount",
    },
    {
      question: "What is the purpose of the props in React?",
      options: [
        "To define the state of a component",
        "To handle events in a component",
        "To pass data between components",
        "To set the initial properties of a component",
      ],
      correctAnswer: "To pass data between components",
    },
    {
      question: "What is the purpose of the key attribute in Reactlists?",
      options: [
        "It defines the type of data in the list",
        "It uniquely identifies elements in the list",
        "It specifies the style of the list items",
        "It sets the initial state of the list",
      ],
      correctAnswer: "It uniquely identifies elements in the list",
    },
    {
      question:
        "Which hook is used for adding state to functional components in React?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: "useState",
    },
    {
      question: "How do you import a component from another file in React?",
      options: [
        "import component from ./Component",
        "import { Component } from react",
        "include Component from ./Component",
        "add Component from react",
      ],
      correctAnswer: "Paris",
    },
    {
      question: "What is the purpose of the useEffect hook in React?",
      options: [
        "To perform data fetching in functional components",
        "To handle user inputs in a form",
        "To define the initial state of a component",
        "To update the components state",
      ],
      correctAnswer: "To handle user inputs in a form ",
    },
    {
      question:
        "Which command is used to start the development server in a React application?",
      options: ["npm start", "npm run build", "npm serve", "npm dev"],
      correctAnswer: "npm start",
    },
    {
      question: "What is the purpose of the className attribute in React?",
      options: [
        "It defines the name of the component",
        "It specifies the components class",
        "It sets the class for styling purposes",
        "It is not used in React",
      ],
      correctAnswer: "It sets the class for styling purposes",
    },
    {
      question: "How can you handle events in React?",
      options: [
        "Using the onEvent attribute",
        "Using the event method",
        "Using the handleEvent method",
        "Using camelCase event attributes like onClick or onChange",
      ],
      correctAnswer: "Using the onEvent attribute",
    },
    {
      question:
        "Which library is commonly used for routing in a React application?",
      options: [
        "react-router-dom",
        "router-react",
        "route-handler",
        "react-route",
      ],
      correctAnswer: "react-router-dom ",
    },
    {
      question:
        "How can you prevent the default behavior of an event in React?",
      options: [
        "event.prevent()",
        "event.stopDefault()",
        "event.halt()",
        "event.preventDefault()",
      ],
      correctAnswer: "event.prevent() ",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] =
      questions[questionIndex].options[optionIndex];
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  return (
    <div className="container mt-4">
      {questions.map((question, index) => (
        <div key={index} className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{`Question ${index + 1}: ${
              question.question
            }`}</h5>

            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={`question${index}`}
                  id={`option${index}${optionIndex}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, optionIndex)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`option${index}${optionIndex}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="footer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit Answers
        </button>

        {showFeedback && (
          <div className="mt-3">
            <h5>Quiz Results:</h5>
            {questions.map((question, index) => (
              <p key={index}>
                {`Question ${index + 1}: ${
                  selectedAnswers[index] === question.correctAnswer
                    ? "Correct"
                    : "Incorrect"
                }`}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
