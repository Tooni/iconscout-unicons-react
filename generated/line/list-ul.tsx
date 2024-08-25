import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgListUl = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M3.71 16.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.2 1.2 0 0 0 .33.21.94.94 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.33M7 8h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m-3.29 3.29a1 1 0 0 0-1.09-.21 1.2 1.2 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.2 1.2 0 0 0 .21.33 1.2 1.2 0 0 0 .33.21.94.94 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.21 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33M21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M3.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.2 1.2 0 0 0-.21.33.94.94 0 0 0 0 .76 1.2 1.2 0 0 0 .21.33 1.2 1.2 0 0 0 .33.21 1 1 0 0 0 1.09-.21 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.2 1.2 0 0 0-.21-.33M21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgListUl)
export default ForwardRef
