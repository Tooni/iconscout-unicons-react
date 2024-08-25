import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLineSpacing = (
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
      d="M21 8H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2m0 5H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M4.667 18.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M21 18H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M6.334 9a1 1 0 0 1-.77-.36l-.897-1.078-.898 1.079A1 1 0 0 1 2.23 7.359l1.667-2A1 1 0 0 1 4.667 5a1 1 0 0 1 .769.36l1.666 2A1 1 0 0 1 6.334 9M4.667 19a1 1 0 0 1-.769-.36l-1.667-2a1 1 0 1 1 1.538-1.28l.898 1.078.897-1.078a1 1 0 0 1 1.538 1.28l-1.666 2a1 1 0 0 1-.769.36"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLineSpacing)
export default ForwardRef
