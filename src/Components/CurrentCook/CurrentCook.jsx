import PropTypes from 'prop-types';

const CurrentCook = ({ prepare, index }) => {
    const { name, preparing_time, calories } = prepare
    return (
        <div className='grid grid-cols-4 gap-4 lg:grid-cols-5 items-center justify-items-center mt-4 bg-slate-300 rounded-xl p-4'>
            <div>{index + 1}</div>
            <div>{name}</div>
            <div>{preparing_time}</div>
            <div>{calories}</div>
        </div>
    );
};

CurrentCook.propTypes = {
    prepare: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default CurrentCook;