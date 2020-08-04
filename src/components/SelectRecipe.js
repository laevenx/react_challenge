import React from 'react'
import {useParams} from 'react-router-dom'
import useFetcher from './useFetcher'
import Recipe from './Recipe'
import { Typography } from 'antd';

const { Title } = Typography;

function SelectRecipe(){
        const {name} = useParams()
        
        
        let { loading, error, data: meals } = useFetcher(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
        )
        // console.log(meals)
        if (loading) return <p>loading.....</p>
        if (error) return <p>Error...</p>



        return(
                <div>
                         <Title>Search Recipe</Title>
                {meals.map((meal) => {
                  return <Recipe meal={meal}/>
                })}
               </div>
             
        )
}


export default SelectRecipe