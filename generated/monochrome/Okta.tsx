import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOkta = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.998 2a10 10 0 1 0 10 10 9.995 9.995 0 0 0-10-10m0 15.01a5.01 5.01 0 1 1 5.01-5.01 5.014 5.014 0 0 1-5.01 5.01"
      className="okta_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOkta)
export default ForwardRef
