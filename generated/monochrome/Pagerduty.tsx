import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPagerduty = (
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
    <path
      d="M6 16.673h2.93V22H6zM17.034 2.977C15.46 2.139 14.37 2 11.796 2H6v12.124h5.77c2.296 0 4.008-.14 5.517-1.141a5.77 5.77 0 0 0 2.499-4.997 5.49 5.49 0 0 0-2.752-5.01m-4.591 8.61H8.93V4.6l3.31-.026c3.018-.038 4.527 1.028 4.527 3.437 0 2.588-1.864 3.577-4.324 3.577"
      className="pagerduty_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPagerduty)
export default ForwardRef
