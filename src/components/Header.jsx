import logo from "../assets/quiz.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz logo" />
      <h1>Atluri's Quiz</h1>
    </header>
  );
}
