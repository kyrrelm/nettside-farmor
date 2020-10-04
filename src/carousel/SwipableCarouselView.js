import React from 'react'
import virtualize from 'react-swipeable-views-utils/lib/virtualize'
import bindKeyboard from 'react-swipeable-views-utils/lib/bindKeyboard'
import SwipeableViews from 'react-swipeable-views'
import { modulo } from './util'

const VirtualizeSwipeViews = bindKeyboard(virtualize(SwipeableViews))

const carouselSlideRenderer = (children) =>
  ({index, key}) => React.cloneElement(children[modulo(index, children.length)], {key})

export default function Carousel ({children, ...other}) {
  const slideRenderer = carouselSlideRenderer(children)
  return (
    <VirtualizeSwipeViews
      {...other}
      slideRenderer={slideRenderer}
    />
  )
}
