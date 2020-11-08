import React from 'react'
// @ts-ignore
import virtualize from 'react-swipeable-views-utils/lib/virtualize'
// @ts-ignore
import bindKeyboard from 'react-swipeable-views-utils/lib/bindKeyboard'
import SwipeableViews from 'react-swipeable-views'
import { modulo } from './util'

const VirtualizeSwipeViews = bindKeyboard(virtualize(SwipeableViews))

const carouselSlideRenderer = (children: any) =>
  ({index, key}: any) => React.cloneElement(children[modulo(index, children.length)], {key})

export default function SwipableCarouselView ({children, ...other}: any) {
  const slideRenderer = carouselSlideRenderer(children)
  return (
    <VirtualizeSwipeViews
      {...other}
      slideRenderer={slideRenderer}
    />
  )
}
