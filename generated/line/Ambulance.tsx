import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAmbulance = (
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
    <path d="M10.5 9.5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m12.43 2.15-.06-.11a.6.6 0 0 0-.07-.14l-2.4-3.2A3 3 0 0 0 18 7h-2V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v11a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-.07-.35M6 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1m8-3H8.22a3 3 0 0 0-4.44 0H3V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1Zm2-7h2a1 1 0 0 1 .8.4L20 11h-4Zm2 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1m3-3h-.78a3 3 0 0 0-4.22-.22V13h5Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAmbulance)
export default ForwardRef
