import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMediumM = (
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
    <path
      d="M22 6.417h-.791a.9.9 0 0 0-.709.694v9.83a.84.84 0 0 0 .709.642H22v2.334h-7.167v-2.334h1.5V7.25h-.073l-3.503 12.667h-2.712L6.588 7.25H6.5v10.333H8v2.334H2v-2.334h.768a.84.84 0 0 0 .732-.641v-9.83a.9.9 0 0 0-.732-.695H2V4.083h7.503l2.463 9.167h.068l2.486-9.167H22z"
      className="medium-m_svg__uim-primary"
      data-name="Brand Logos"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMediumM)
export default ForwardRef
