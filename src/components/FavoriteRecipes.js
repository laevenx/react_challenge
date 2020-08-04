import React, { useState, useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { Typography, Card, Input, Button } from 'antd';
import _ from 'lodash'
import {removeFavorite} from '../store/actions/index'

const { Title } = Typography;

const FavoriteRecipes = () => {
    const dispatch = useDispatch()
    let favorites1 = useSelector(state => state.favorites)
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])
    // let restorefavorites = favorites
    // setResult(favorites1)
    const remove = (check) => {
        // let data = favorites1.favorites
        let fixedData = []
        result.map((file) => {
            if(file.idMeal != check){
                fixedData.push(file)
            }
        })
        dispatch(removeFavorite(fixedData))
        setResult(fixedData)
    }

    const debounceSearch = useRef(
        _.debounce(search => {
            // console.log(favorites1)
            const changefavorites = favorites1.favorites.filter(favorite => {
                return favorite.strMeal.toLowerCase().includes(search.toLowerCase())
            })
            setResult(changefavorites)
        }, 1000)
        
    )

    useEffect(() => {

        if (search) {
            debounceSearch.current(search)
        }else{
            setResult(favorites1.favorites)
        }
        console.log('result',result)
        console.log('test',favorites1)
    }, [search])

   


    // const test = `/recipes/${favorite.idMeal}`
    return (
        <div>
            <Title>Favorites</Title>
            <Input placeholder='search' value={search} onChange={event => setSearch(event.target.value)} />
            {result.map((favorite) => {
                const test = `/recipes/${favorite.idMeal}`
                const check = favorite.idMeal
                return <Card title={JSON.stringify(favorite.strMeal)}>
                    <p>Id: {JSON.stringify(favorite.idMeal)}</p>
                    <p>Category: {JSON.stringify(favorite.strCategory)}</p>
                    <p>Instruction: {JSON.stringify(favorite.strInstructions)}</p>
                    <Button type="primary"><Link to={test}>Detail</Link></Button>
                    <Button type="primary" onClick={() => remove(favorite.idMeal)}>Remove</Button>
                </Card>
            })}
        </div>
    )

}

export default FavoriteRecipes