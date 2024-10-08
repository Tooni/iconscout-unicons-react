import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEnvelopeOpen = (
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
    <path d="M20.21 8.82 14 2.78a2.83 2.83 0 0 0-3.9 0l-6.21 6A2.6 2.6 0 0 0 3 10.71v8.58A2.75 2.75 0 0 0 5.78 22h12.44A2.75 2.75 0 0 0 21 19.29v-8.58a2.67 2.67 0 0 0-.79-1.89m-8.77-4.6a.83.83 0 0 1 1.12 0L18 9.5l-5.47 5.28a.83.83 0 0 1-1.12 0L6 9.5ZM19 19.29a.76.76 0 0 1-.78.71H5.78a.76.76 0 0 1-.78-.71v-7.94l4.05 3.9-1.66 1.6a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.77-1.7a2.8 2.8 0 0 0 2.92 0l1.77 1.7a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41L15 15.25l4-3.9Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgEnvelopeOpen)
export default ForwardRef
