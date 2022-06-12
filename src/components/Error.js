import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='errorView'>
      <p className='fof-message'>Sorry, that page does not exist!</p>
      <Link to='/' className='redirect'>Click here to go back to the homepage</Link>
    </div>
  );
};

export default Error;