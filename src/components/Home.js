import React, { useState, useEffect, useRef, useDispatch, useSelector } from 'react'
import Recipe from './Recipe'
import { Typography, Input, Spin, Alert } from 'antd'
import _ from 'lodash'
import { fetchMeals } from '../store/actions/index'

const { Title } = Typography;
const Home = () => {
  const dispatch = useDispatch()
  const asd = useSelector(state => state.meals)

  const [search, setSearch] = useState('')

  const debounceSearch = useRef(
    _.debounce(search => {
      dispatch(fetchMeals(search))
    }, 1000)

  )

  useEffect(() => {
    debounceSearch.current(search)

  }, [search])

  console.log(asd)
  if (asd.loading) return <Spin tip="Loading...">
    <Alert
      message="Please Wait"
      description="One moment please...."
      type="info"
    />
  </Spin>
  if (asd.error) return <p>Error...</p>

  return (
    <div>
      <Title>Home</Title>
      <Input placeholder='search' value={search} onChange={event => setSearch(event.target.value)} />
      {asd.meals.map((meal) => {
        return <Recipe meal={meal} />
      })}
    </div>
  )
}

export default Home