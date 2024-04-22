import { MyContextProvider } from './context/taskContext';
import DisplayList from './components/displayList';
import DenseAppBar from './components/header';

function App() {

  return (
    <>
      <DenseAppBar  text = {'Task Management'}></DenseAppBar>
      <MyContextProvider>
        <DisplayList></DisplayList>
      </MyContextProvider>
      <DenseAppBar></DenseAppBar>
    </>
  );
}

export default App;
