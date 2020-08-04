import React, {useEffect} from 'react';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import 'antd/dist/antd.css'
import './App.css';
import Home from './components/Home'
import SelectRecipe from './components/SelectRecipe'
import FavoriteRecipes from './components/FavoriteRecipes'
import DetailRecipe from './components/DetailRecipe'
import { Layout, Menu } from 'antd';
import {fetchMeals } from './store/actions/index'
import {useDispatch} from 'react-redux'

const { Header} = Layout;


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMeals())

  }, [dispatch])

  return (
    <Router>
      <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/favorites'>Favorites</Link></Menu.Item>
      </Menu>
    </Header>
    
      <Switch>
        <Route path='/recipes/:id'>
          <DetailRecipe/>
        </Route>
        <Route path='/search/:name'>
          <SelectRecipe />
        </Route>
        <Route path='/favorites'>
            <FavoriteRecipes/>
        </Route>
        <Route path='/'>
            <Home />
        </Route>
        
      </Switch>

    </Router>


  )
}



export default App;
