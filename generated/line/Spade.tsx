import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSpade = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21.06 12.28a5.7 5.7 0 0 0-1.67-4L14 2.81a2.83 2.83 0 0 0-4 0L4.61 8.23a5.7 5.7 0 0 0-1.67 4A5.7 5.7 0 0 0 8.66 18a6.9 6.9 0 0 1-1.23 2.37A1 1 0 0 0 8.24 22h7.52a1 1 0 0 0 .78-1.63A6.8 6.8 0 0 1 15.31 18a5.69 5.69 0 0 0 5.75-5.71ZM18 14.91a3.78 3.78 0 0 1-3.66.95 1 1 0 0 0-.17 0h-.2a1.4 1.4 0 0 0-.22.06h-.15a.7.7 0 0 0-.13.11.8.8 0 0 0-.17.14.6.6 0 0 1-.06.11 3 3 0 0 0-.12.23 1 1 0 0 0 0 .18v.18a8.8 8.8 0 0 0 .82 3.13h-3.88a8.6 8.6 0 0 0 .88-3v-.19a1 1 0 0 0 0-.18 1.1 1.1 0 0 0-.13-.24.5.5 0 0 0-.06-.1.5.5 0 0 0-.16-.14 1 1 0 0 0-.13-.11h-.14a1 1 0 0 0-.23-.07H9.9a1 1 0 0 0-.18 0A3.81 3.81 0 0 1 6 14.91a3.75 3.75 0 0 1-1.09-2.63A3.7 3.7 0 0 1 6 9.65l5.4-5.42a.81.81 0 0 1 1.13 0L18 9.65a3.7 3.7 0 0 1 1.09 2.63A3.78 3.78 0 0 1 18 14.91" />
  </svg>
)
const ForwardRef = forwardRef(SvgSpade)
export default ForwardRef
