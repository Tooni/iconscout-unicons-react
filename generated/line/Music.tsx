import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMusic = (
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
    <path d="M21.65 2.24a1 1 0 0 0-.8-.23l-13 2A1 1 0 0 0 7 5v10.35A3.45 3.45 0 0 0 5.5 15 3.5 3.5 0 1 0 9 18.5v-7.64l11-1.69v4.18a3.45 3.45 0 0 0-1.5-.35 3.5 3.5 0 1 0 3.5 3.5V3a1 1 0 0 0-.35-.76M5.5 20A1.5 1.5 0 1 1 7 18.5 1.5 1.5 0 0 1 5.5 20m13-2a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5M20 7.14 9 8.83v-3l11-1.66Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMusic)
export default ForwardRef
