import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFavorite = (
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
    <path
      d="M17.562 21.56a1 1 0 0 1-.465-.116L12 18.764l-5.097 2.68a1 1 0 0 1-1.45-1.053l.973-5.676-4.124-4.02a1 1 0 0 1 .554-1.705l5.699-.828 2.549-5.164a1.04 1.04 0 0 1 1.793 0l2.548 5.164 5.699.828a1 1 0 0 1 .554 1.705l-4.124 4.02.974 5.676a1 1 0 0 1-.985 1.169Z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFavorite)
export default ForwardRef
