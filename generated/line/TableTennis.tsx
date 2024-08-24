import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTableTennis = (
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
    <path d="m20.71 16.1-1.64-1.64a.94.94 0 0 1-.22-1.07 5.8 5.8 0 0 0 .54-2.39.4.4 0 0 0 0-.1 5.74 5.74 0 0 0-1.06-3.34 14.2 14.2 0 0 0-5.17-4.42 7 7 0 0 0-8 1.31l-.67.67a7 7 0 0 0-1.31 8.05l.1.17a3 3 0 0 0-.84 2.06A3 3 0 0 0 7 17.94c.18.14.34.29.52.42a5.6 5.6 0 0 0 1.22.64h.09c.18.07.37.13.57.19h.15a5 5 0 0 0 .95.15h.62c.21 0 .41 0 .62-.06h.17a5.5 5.5 0 0 0 1.42-.45 1 1 0 0 1 1.07.21l1.46 1.46a3.4 3.4 0 0 0 2.39 1 2.85 2.85 0 0 0 2-.85l.38-.38a3 3 0 0 0 .08-4.17m-15.3.32a1 1 0 1 1 1-1 1 1 0 0 1-1 1m3.1.14-.26-.2a3 3 0 0 0 .16-.94 3 3 0 0 0-3-3h-.38l-.09-.16a5 5 0 0 1 .93-5.75l.67-.67A5 5 0 0 1 12.28 5a12 12 0 0 1 4.26 3.57Zm10.78 2.37-.37.38c-.42.42-1.07.34-1.61-.2l-1.46-1.45a3 3 0 0 0-3.34-.61 3.4 3.4 0 0 1-1 .31 3 3 0 0 1-.58.05h-.44l6.87-6.87a3.8 3.8 0 0 1-.34 2 3 3 0 0 0 .61 3.34l1.64 1.65a1 1 0 0 1 .02 1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgTableTennis)
export default ForwardRef
