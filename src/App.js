import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Routes/Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './Utils/Firebase/firebase.config';
import { setUser } from './Utils/ReduxToolkit/AuthSlice/AuthSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }
    }, [])
  })
  return (
    <div className="max-w-[1440px]">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
