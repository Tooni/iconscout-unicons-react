import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWrapText = (
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
    <path d="M2.5 7h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1M19 11H2.5a.5.5 0 0 0 0 1H19a2 2 0 0 1 0 4h-5.074l1.386-1.11a.5.5 0 1 0-.624-.78l-2.5 2q-.016.013-.03.028l-.02.02q-.015.014-.028.029c-.014.018-.019.039-.03.058a.5.5 0 0 0-.047.09q-.016.05-.02.102c-.003.021-.013.04-.013.063 0 .01.005.017.005.026.002.036.012.068.02.102.009.03.015.06.028.087s.033.05.051.076q.029.043.065.078c.008.006.01.016.019.022l2.5 2a.5.5 0 0 0 .703-.079.5.5 0 0 0-.078-.703L13.926 17H19a3 3 0 1 0 0-6m-9.5 5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgWrapText)
export default ForwardRef
