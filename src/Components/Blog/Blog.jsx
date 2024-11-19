import PropTypes from 'prop-types';
import { FaRegClock, FaFire } from "react-icons/fa";
const Blog = ({ blog, handleWantCook }) => {
    const { cover, name, description, ingredients, preparing_time, calories } = blog;
    return (
        <div className='space-y-4 bg-slate-100 rounded-lg p-4'>
            <img className='rounded-lg' src={cover} alt="" />
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <p>{description}</p>
            <h4 className='text-xl font-semibold'>Ingredients: {ingredients.length}</h4>

            <div>
                {
                    ingredients.map((ingredient, idx) => <p key={idx}><li>{ingredient}</li></p>)
                }
            </div>
            <hr />
            <div className='flex gap-6'>
                <div className='flex gap-2 items-center'>
                    <FaRegClock />
                    <p> {preparing_time} minutes</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaFire />
                    <p> {calories} calories</p>
                </div>
            </div>
            <button onClick={() => handleWantCook(blog)} className='bg-green-400 rounded-2xl p-3 font-semibold'>Want to cook</button>
        </div>
    );
};

Blog.propTypes = {
    handleWantCook: PropTypes.func,
    blog: PropTypes.func
};

export default Blog;