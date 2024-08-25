import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPentagon = (
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
      d="M17.562 21.56H6.437a1 1 0 0 1-.95-.692l-3.438-10.58a1 1 0 0 1 .363-1.117l9-6.54a1 1 0 0 1 1.176 0l9 6.54a1 1 0 0 1 .363 1.117l-3.437 10.58a1 1 0 0 1-.952.692"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPentagon)
export default ForwardRef
