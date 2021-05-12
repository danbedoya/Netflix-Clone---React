import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NetflixIntro from './NetflixIntro';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      await setLoading(false);
    }, 5500)

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      } else {

        dispatch(logout());
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <Router>
      {loading ? (
        <NetflixIntro />
      ) : (
          <>
            {!user ? (
              <LoginScreen />
            ) : (
                <div className="app">
                  <Switch>
                    <Route path="/profile">
                      <ProfileScreen />
                    </Route>
                    <Route path="/test">
                      <h1>Welcoe</h1>
                    </Route>
                    <Route exact path="/">
                      <HomeScreen />
                    </Route>
                  </Switch>
                </div>
              )}
          </>
        )
      }
    </Router >
  );

}

export default App;
