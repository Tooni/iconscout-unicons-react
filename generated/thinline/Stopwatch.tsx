import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStopwatch = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M10 4h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1m7.993 4.713 1.36-1.36a.5.5 0 0 0-.707-.707l-1.36 1.36C15.876 6.762 14.03 6 12 6s-3.876.762-5.287 2.007l-1.36-1.36a.5.5 0 0 0-.707.707l1.36 1.36A7.96 7.96 0 0 0 4 14a8 8 0 0 0 8 8 8.01 8.01 0 0 0 8-8 7.96 7.96 0 0 0-2.007-5.287M12 21A7 7 0 0 1 7.037 9.065c.005-.005.012-.006.017-.011q.006-.009.01-.017A6.98 6.98 0 0 1 12 7a6.99 6.99 0 0 1 4.943 2.049l.008.008A6.99 6.99 0 0 1 19 14a7 7 0 0 1-7 7m.5-8.408V10.5a.5.5 0 0 0-1 0v2.092A1.496 1.496 0 0 0 12 15.5a1.496 1.496 0 0 0 .5-2.908" />
  </svg>
)
const ForwardRef = forwardRef(SvgStopwatch)
export default ForwardRef
