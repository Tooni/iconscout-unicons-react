import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEnvelopeReceive = (
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
    <path d="m8.29 6.21 2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H15a1 1 0 0 0 0-2h-3.59l.3-.29a1 1 0 1 0-1.42-1.42l-2 2a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33M16 10.5H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-.42 2-2.88 2.88a1 1 0 0 1-1.4 0L8.42 12.5Zm1.42 6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4.59l2.88 2.87a2.94 2.94 0 0 0 2.12.89 3 3 0 0 0 2.12-.88L17 13.91Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgEnvelopeReceive)
export default ForwardRef
