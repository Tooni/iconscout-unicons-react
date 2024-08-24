import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSadCrying = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
    <path d="M12 2a10 10 0 0 0-3.41 19.39h.06a9.8 9.8 0 0 0 6.7 0h.06A10 10 0 0 0 12 2m2 17.74a7.8 7.8 0 0 1-4 0v-3.13a3.79 3.79 0 0 1 4 0Zm2-.82V11a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2v3.39a6 6 0 0 0-4 0V11a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2v7.92a8 8 0 1 1 8 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgSadCrying)
export default ForwardRef