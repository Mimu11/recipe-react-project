import PropTypes from 'prop-types';

const CookItem = ({ cookItem, handleCook, index }) => {
    console.log(index)


    const { id, name, preparing_time, calories } = cookItem;


    return (

        <div>
            <div className='grid grid-cols-4 gap-4 lg:grid-cols-5 items-center justify-items-center mt-4 bg-slate-300 rounded-xl p-4'>
                <div>{index + 1}</div>
                <div>{name}</div>
                <div>{preparing_time}</div>
                <div>{calories}</div>
                <button onClick={() => handleCook(cookItem, preparing_time, calories, id)} className='bg-green-500 rounded-2xl p-2  font-medium'>Preparing</button>
            </div>

        </div>

    );
};

CookItem.propTypes = {
    cookItem: PropTypes.object.isRequired,
    handleCook: PropTypes.func,
    index: PropTypes.number
};

export default CookItem;