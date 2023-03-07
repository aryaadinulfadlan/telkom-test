import React from "react"
import { Banner, DetailButton, HomeContainer, ImgBackdrop, ImgWrap, Item, Lefttem, ListItem, RightContent, RightItem } from "./HomeStyle"
import Item1 from '../../assets/img/item-1.jpg'
import Item2 from '../../assets/img/item-2.jpg'
import Item3 from '../../assets/img/item-3.jpg'

type Item = {
  [key: string]: string;
}
const items: Array<Item> = [
  {
    id: 'x1',
    title: 'Home Service',
    image: Item1
  },
  {
    id: 'x2',
    title: 'Enterprise',
    image: Item2
  },
  {
    id: 'x3',
    title: 'Wholesale',
    image: Item3
  },
]
function Home(): React.ReactElement {
  return (
    <HomeContainer>
      <Banner>
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed natus ipsa cum. Cum esse corporis et porro nihil exercitationem?</p>
      </Banner>
      <ListItem>
        <Lefttem>
          {
            items.map(el => (
              <Item key={el.id}>
                <ImgWrap>
                  <img src={el.image} alt={el.title} />
                </ImgWrap>
                <p>{el.title}</p>
                <ImgBackdrop>{el.title}</ImgBackdrop>
              </Item>
            ))
          }
        </Lefttem>
        <RightItem>
          <RightContent>
            <p>Telkom Integrity Line</p>
            <DetailButton>See Details</DetailButton>
          </RightContent>
        </RightItem>
      </ListItem>
    </HomeContainer>
  )
}

export default Home