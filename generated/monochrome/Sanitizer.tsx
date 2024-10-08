import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSanitizer = (
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
    <path
      d="M5 5a1 1 0 0 1-.707-1.707l.829-.829A4.97 4.97 0 0 1 8.657 1H17a1 1 0 0 1 0 2H8.657a3.02 3.02 0 0 0-2.121.878l-.829.829A1 1 0 0 1 5 5"
      opacity={1}
    />
    <path
      d="M10 3v2.5l.4-.3A1 1 0 0 1 11 5h4a1 1 0 0 1 .6.2l.4.3V3Z"
      opacity={0.5}
    />
    <circle cx={13} cy={15} r={2} opacity={1} />
    <path
      d="M13 18a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"
      opacity={1}
    />
    <path
      d="m18.8 7.6-3.2-2.4A1 1 0 0 0 15 5h-4a1 1 0 0 0-.6.2L7.2 7.6A3.02 3.02 0 0 0 6 10v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a3.02 3.02 0 0 0-1.2-2.4M13 18a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSanitizer)
export default ForwardRef
