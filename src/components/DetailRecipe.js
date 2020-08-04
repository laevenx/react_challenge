import React from 'react'
import useFetcher from './useFetcher'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Spin, Alert } from 'antd'

const DetailRecipe = () => {

    let { id } = useParams()
    // console.log(id)
    let { loading, error, data: meals } = useFetcher(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
    const dispatch = useDispatch()
    let favorites = useSelector((state) => state.favorites)

    function AddFavorite() {
        favorites = favorites.concat(meals)
        // console.log(favorites)
        dispatch({ type: 'SET_FAVORITES', payload: favorites })
    }
    // console.log(meals)
    if (loading) return <Spin tip="Loading...">
        <Alert
            message="Please Wait"
            description="One moment please...."
            type="info"
        />
    </Spin>
    if (error) return <p>Error...</p>


    return (
        <div>
            {meals.map((meal) => {
                return <div><img src={meal.strMealThumb} style={{width:"200px",height:"200px"}} />
                    <Card title={JSON.stringify(meal.strMeal)}>
                        <p>Id: {JSON.stringify(meal.idMeal)}</p>
                        <p>Category: {JSON.stringify(meal.strCategory)}</p>
                        <p>Instruction: {JSON.stringify(meal.strInstructions)}</p>
                        <Button type="primary" onClick={AddFavorite}>Add to favorites</Button>
                    </Card>
                </div>
            })}

        </div>
    )
}

export default DetailRecipe