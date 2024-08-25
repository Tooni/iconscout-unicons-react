import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDiscord = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M18.891 2H5.11A2.114 2.114 0 0 0 3 4.119v13.906a2.114 2.114 0 0 0 2.109 2.119h11.664l-.546-1.903 1.317 1.224 1.245 1.152L21 22.571V4.12A2.114 2.114 0 0 0 18.891 2m-3.97 13.433s-.37-.442-.679-.833a3.25 3.25 0 0 0 1.862-1.224 6 6 0 0 1-1.183.607 6.8 6.8 0 0 1-1.491.442 7.2 7.2 0 0 1-2.664-.01 8.6 8.6 0 0 1-1.512-.442 6 6 0 0 1-.751-.35c-.031-.02-.062-.031-.093-.052a.1.1 0 0 1-.04-.03 4 4 0 0 1-.289-.175 3.2 3.2 0 0 0 1.8 1.213c-.308.391-.689.854-.689.854a3.73 3.73 0 0 1-3.137-1.563 13.8 13.8 0 0 1 1.481-5.997 5.1 5.1 0 0 1 2.89-1.08l.103.124a6.9 6.9 0 0 0-2.705 1.347s.226-.123.607-.298a7.7 7.7 0 0 1 2.335-.648 1 1 0 0 1 .175-.02 8.7 8.7 0 0 1 2.077-.021 8.4 8.4 0 0 1 3.096.987 6.85 6.85 0 0 0-2.56-1.306l.143-.165a5.1 5.1 0 0 1 2.89 1.08 13.8 13.8 0 0 1 1.482 5.997 3.76 3.76 0 0 1-3.148 1.563m-1.028-4.803a1.146 1.146 0 1 0 1.049 1.141 1.096 1.096 0 0 0-1.05-1.141"
      opacity={1}
    />
    <path
      d="M14.921 15.433s-.37-.442-.679-.833a3.25 3.25 0 0 0 1.862-1.224 6 6 0 0 1-1.183.607 6.8 6.8 0 0 1-1.491.442 7.2 7.2 0 0 1-2.664-.01 8.6 8.6 0 0 1-1.512-.442 6 6 0 0 1-.751-.35c-.031-.02-.062-.031-.093-.052a.1.1 0 0 1-.04-.03 4 4 0 0 1-.289-.175 3.2 3.2 0 0 0 1.8 1.213c-.308.391-.689.854-.689.854a3.73 3.73 0 0 1-3.137-1.563 13.8 13.8 0 0 1 1.481-5.997 5.1 5.1 0 0 1 2.89-1.08l.103.124a6.9 6.9 0 0 0-2.705 1.347s.226-.123.607-.298a7.7 7.7 0 0 1 2.335-.648 1 1 0 0 1 .175-.02 8.7 8.7 0 0 1 2.077-.021 8.4 8.4 0 0 1 3.096.987 6.85 6.85 0 0 0-2.56-1.306l.143-.165a5.1 5.1 0 0 1 2.89 1.08 13.8 13.8 0 0 1 1.482 5.997 3.76 3.76 0 0 1-3.148 1.563m-1.028-4.803a1.146 1.146 0 1 0 1.049 1.141 1.096 1.096 0 0 0-1.05-1.141"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDiscord)
export default ForwardRef
