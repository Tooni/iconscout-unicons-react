import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclamationTriangle = (
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
    <path d="M12 15.875a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25M12 14a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m10.713 3.547L14.564 3.479a2.964 2.964 0 0 0-5.128 0l-8.15 14.07A2.965 2.965 0 0 0 3.852 22h16.294a2.966 2.966 0 0 0 2.567-4.453M20.146 21H3.852a1.965 1.965 0 0 1-1.7-2.95L10.3 3.98c.348-.609.997-.983 1.699-.979a1.94 1.94 0 0 1 1.7.98l8.148 14.068A1.966 1.966 0 0 1 20.146 21" />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationTriangle)
export default ForwardRef
