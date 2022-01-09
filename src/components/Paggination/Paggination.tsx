import React from 'react'

import { PagginationList, ListItem } from './Paggination.styles'

const Paggination = () => {
  return (
    <PagginationList>
      <ListItem className="active">1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
      <ListItem>4</ListItem>
      <ListItem>5</ListItem>
      <ListItem>6</ListItem>
      <ListItem>7</ListItem>
      <ListItem>...</ListItem>
      <ListItem className="active">843</ListItem>
    </PagginationList>
  )
}

export default Paggination
