import AppHooks from '../meHooks/AppHooks';
import SearchFilter from '../searchFilter/SearchFilter';
import CurrencyConverter from '../currencyConverter/CurrencyConverter';
import Slider from '../slider/Slider';
import TransitionGroup from '../transitionGroup/TransitionGroup';
import CustomForm from '../form/Form';
import TodoList from '../todoList/TodoList';
import TestApi from '../testApi/TestApi';

function App() {

    return (
        <>
            <TestApi/>
            {/* <Slider /> */}
            {/* <CurrencyConverter number={100} /> */}
            {/* <AppHooks /> */}
            {/* <SearchFilter/> */}
            {/* <TransitionGroup/> */}
            {/* <CustomForm/> */}
            <TodoList/>
        </>

    );
}

export default App;