import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOperaAlt = (
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
    <path d="M11.97 5c-3.643 0-3.643 5.123-3.643 6.858 0 1.953 0 7.142 3.66 7.142 3.655 0 3.655-5.162 3.655-7.105C15.642 7.32 14.406 5 11.97 5m.017 12c-1.101 0-1.66-1.73-1.66-5.195 0-2.191.285-4.805 1.644-4.805 1.454 0 1.67 3.067 1.67 4.895 0 3.388-.556 5.105-1.654 5.105m.001-16C5.937 1 1.71 5.482 1.71 11.9 1.71 17.356 5.557 23 11.995 23c6.434 0 10.278-5.644 10.278-11.101C22.273 5.482 18.044 1 11.988 1m.007 20C6.81 21 3.71 16.373 3.71 11.9 3.71 6.577 7.037 3 11.988 3c4.956 0 8.285 3.577 8.285 8.899 0 4.474-3.096 9.101-8.278 9.101" />
  </svg>
)
const ForwardRef = forwardRef(SvgOperaAlt)
export default ForwardRef
