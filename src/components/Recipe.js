import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Divider, Card } from 'antd'
import {addFavorites } from '../store/actions/index'

const Recipe = (props) => {
    let { meal } = props

    const dispatch = useDispatch()
    let favoriteList = useSelector((state) => state.favorites)

    function AddFavorite() {
        let check = false
        for(let i=0;i < favoriteList.favorites.length;i++){
            if(favoriteList.favorites[i].idMeal === meal.idMeal){
                check = true
            }
        }
        if(!check){
            let favorites = favoriteList.favorites.concat(meal)
            dispatch(addFavorites(favorites))
        }
        
    }

    const test = `/recipes/${meal.idMeal}`

    return (
        <div>
            <Card title={JSON.stringify(meal.strMeal)}>
                <p>Id: {JSON.stringify(meal.idMeal)}</p>
                <p>Category: {JSON.stringify(meal.strCategory)}</p>
                <p>Instruction: {JSON.stringify(meal.strInstructions)}</p>
                <Button type="primary" onClick={AddFavorite}>Add to favorites</Button>
                <Button type="primary"><Link to={test}>Detail</Link></Button>
            </Card>
            <Divider />
        </div>
    )
}

export default Recipe