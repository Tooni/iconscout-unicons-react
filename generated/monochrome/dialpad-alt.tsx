import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDialpadAlt = (
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
    <rect
      width={4}
      height={4}
      x={10}
      y={6.955}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={10}
      y={0.955}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={10}
      y={13.045}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={4}
      y={6.955}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={4}
      y={0.955}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={4}
      y={13.045}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={16}
      y={6.955}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={16}
      y={0.955}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={16}
      y={13.045}
      opacity={1}
      rx={0.545}
    />
    <rect
      width={4}
      height={4}
      x={10}
      y={19}
      opacity={1}
      rx={0.545}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpadAlt)
export default ForwardRef
