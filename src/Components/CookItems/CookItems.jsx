import PropTypes from 'prop-types';
import CookItem from '../CookItem/CookItem';
import { useState } from 'react';
import CurrentCook from '../CurrentCook/CurrentCook';
const CookItems = ({ cookItems, handleCook2 }) => {
    const [prepareCook, setPrepareCook] = useState([]);
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0)

    const handleCook = (cook, preparing_time, calories, id) => {
        handleCook2(id);
        const newPrepareCook = [...prepareCook, cook]
        setPrepareCook(newPrepareCook);
        setTime(time + preparing_time)
        setCalories(calories + calories)
    }
    return (
        <div className='lg:w-1/3 mt-6 bg-slate-100 space-y-10 rounded-lg p-4'>
            <div>
                <div>
                    <h1 className='text-2xl text-center font-semibold mb-6'>Want to cook: {cookItems.length}</h1>
                    <div className='flex font-medium  justify-end lg:justify-center space-x-10 shadow-md'>
                        <h4>Name</h4>
                        <h4>Time</h4>
                        <h4>Calories</h4>
                    </div>
                </div>
                <div className=' space-y-6'>
                    {
                        cookItems.map((cookItem, index) => <CookItem
                            index={index}
                            key={cookItem.id}
                            cookItem={cookItem}
                            handleCook={handleCook}
                        ></CookItem>)
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h1 className='text-2xl text-center font-semibold mb-6'>Currently cooking: {prepareCook.length}</h1>
                        <div className='flex font-medium  justify-center space-x-10 shadow-md'>
                            <h4>Name</h4>
                            <h4>Time</h4>
                            <h4>Calories</h4>
                        </div>
                    </div>
                    {
                        prepareCook.map((prepare, index) => <CurrentCook
                            key={prepare.id}
                            index={index}
                            prepare={prepare}
                        ></CurrentCook>
                        )
                    }
                    <div className='mt-8 space-y-4 text-end  font-medium'>
                        <p>Total Time: {time} minutes</p>
                        <p>Total Calories: {calories} calories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

CookItems.propTypes = {
    cookItems: PropTypes.array,
    handlePreparing: PropTypes.func,
    handleCook2: PropTypes.func
};

export default CookItems;