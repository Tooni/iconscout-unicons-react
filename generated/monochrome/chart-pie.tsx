import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgChartPie = (
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
    <path d="M12 12V2c5.523 0 10 4.477 10 10z" opacity={0.25} />
    <path d="m12 12 5 8.66A10.01 10.01 0 0 0 22 12z" opacity={0.5} />
    <path
      d="M17 20.66 12 12V2c-5.523.002-9.999 4.48-9.997 10.003S6.483 22.002 12.007 22A10 10 0 0 0 17 20.662l.003-.005-.004.003z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChartPie)
export default ForwardRef
