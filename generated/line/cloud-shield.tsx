import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudShield = (
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
    <path d="M18.42 7.22A7 7 0 0 0 5.06 9.11a4 4 0 0 0-.38 7.66 1.1 1.1 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 13a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12a5 5 0 0 0-3.58-4.78m-3.63 4.44a2.73 2.73 0 0 1-2.2-.47 1 1 0 0 0-1.18 0 2.72 2.72 0 0 1-2.2.47 1 1 0 0 0-.84.2 1 1 0 0 0-.37.77V16a4.63 4.63 0 0 0 1.84 3.7l1.57 1.15a1 1 0 0 0 1.18 0l1.57-1.16A4.6 4.6 0 0 0 16 16v-3.37a1 1 0 0 0-.37-.77 1 1 0 0 0-.84-.2M14 16a2.62 2.62 0 0 1-1 2l-1 .72-1-.72a2.62 2.62 0 0 1-1-2v-2.28a4.7 4.7 0 0 0 2-.55 4.7 4.7 0 0 0 2 .55Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudShield)
export default ForwardRef
