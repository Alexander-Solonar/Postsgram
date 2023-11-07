import { createContext, useState } from 'react';
export const Context = createContext();

const COURSES = [
  {
    id: '45k6-j54k-4jth',
    title: 'Ліс',
    place: 'Ukraine',
    location: {},
    photoUrl:
      'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  },
  {
    id: '4116-jfk5-43rh',
    title: 'Ліс',
    place: 'Ukraine',
    location: {},
    photoUrl:
      'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  },
  {
    id: '4d16-5tt5-4j55',
    title: 'Ліс',
    place: 'Ukraine',
    location: {},
    photoUrl:
      'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  },
  {
    id: 'LG16-ant5-0J25',
    title: 'Ліс',
    place: 'Ukraine',
    location: {},
    photoUrl:
      'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
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
