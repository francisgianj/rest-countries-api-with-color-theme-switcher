import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen bg-very-light-gray font-body text-very-dark-blue2 dark:bg-very-dark-blue1 dark:text-white">
      <Header />
      <Main />
    </div>
  );
}

export default App;
