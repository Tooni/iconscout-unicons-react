import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVoicemailRectangle = (
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
    <path d="M20 4H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-5-8a3 3 0 0 0-2.82 4h-2.36A3 3 0 1 0 8 15h8a3 3 0 0 0 0-6m-8 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m8 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgVoicemailRectangle)
export default ForwardRef
