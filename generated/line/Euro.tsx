import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEuro = (
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
    <path d="M19.2 17.41A6 6 0 0 1 14.46 20c-2.68 0-5-2-6-5H14a1 1 0 0 0 0-2H8.05c0-.33-.05-.67-.05-1s0-.67.05-1H14a1 1 0 0 0 0-2H8.47c1-3 3.31-5 6-5a6 6 0 0 1 4.73 2.59 1 1 0 1 0 1.6-1.18A7.92 7.92 0 0 0 14.46 2c-3.76 0-7 2.84-8.07 7H4a1 1 0 0 0 0 2h2.05v2H4a1 1 0 0 0 0 2h2.39c1.09 4.16 4.31 7 8.07 7a7.92 7.92 0 0 0 6.34-3.41 1 1 0 0 0-1.6-1.18" />
  </svg>
)
const ForwardRef = forwardRef(SvgEuro)
export default ForwardRef
