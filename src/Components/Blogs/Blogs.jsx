import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleWantCook }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        < div className='lg:w-2/3 grid lg:grid-cols-2 gap-4 mt-6' >
            {
                blogs.map((blog, idx) => <Blog
                    key={idx}
                    blog={blog}
                    handleWantCook={handleWantCook}
                ></Blog>)
            }
        </div >
    );
};

Blogs.propTypes = {
    handleWantCook: PropTypes.func.isRequired
};

export default Blogs;