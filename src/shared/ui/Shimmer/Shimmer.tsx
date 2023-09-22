import React from "react"
import cn from "classnames"

import css from "./Shimmer.module.scss"

interface Props {
  width?: number;
  height?: number;
  className?: string;
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  br?: number;
}

const px = (value: number) => `${value}px`

export const Shimmer: React.FC<Props> = ({ width, height, className, mb, mt, br, mr, ml }) => (
  <div
    className={cn(css.main, className)}
    style={{
      ...(width && { width: px(width) }),
      ...(height && { height: px(height) }),
      ...(mb && { marginBottom: px(mb) }),
      ...(mt && { marginTop: px(mt) }),
      ...(br && { borderRadius: px(br) }),
      ...(mr && { marginRight: px(mr) }),
      ...(ml && { marginLeft: px(ml) }),
    }}
  />
)
