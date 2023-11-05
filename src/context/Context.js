import { createContext, useState } from 'react';
import photoPost from '../assets/images/post.jpg';
export const Context = createContext();

const COURSES = [
  {
    id: '45k6-j54k-4jth',
    title: 'Ліс',
    image: photoPost,
  },
  {
    id: '4116-jfk5-43rh',
    title: 'Ліс',
    image: photoPost,
  },
  {
    id: '4d16-5tt5-4j55',
    title: 'Ліс',
    image: photoPost,
  },
  {
    id: 'LG16-ant5-0J25',
    title: 'Ліс',
    image: photoPost,
  },
];

const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(COURSES);
  const [photoUrl, setPhotoUrl] = useState('');

  return (
    <Context.Provider value={{ photoUrl, setPhotoUrl, posts, setPosts }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
