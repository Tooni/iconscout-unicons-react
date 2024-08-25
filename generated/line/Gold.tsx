import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGold = (
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
    <path d="M8 11h8a1 1 0 0 0 .77-.37A1 1 0 0 0 17 9.8l-1-5a1 1 0 0 0-1-.8H9a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 8 11m1.82-5h4.36l.6 3H9.22ZM22 13.8a1 1 0 0 0-1-.8h-6a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 14 20h8a1 1 0 0 0 .77-.37 1 1 0 0 0 .23-.83ZM15.22 18l.6-3h4.36l.6 3ZM9 13H3a1 1 0 0 0-1 .8l-1 5a1 1 0 0 0 .21.83A1 1 0 0 0 2 20h8a1 1 0 0 0 .77-.37 1 1 0 0 0 .23-.83l-1-5a1 1 0 0 0-1-.8m-5.78 5 .6-3h4.36l.6 3Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgGold)
export default ForwardRef
