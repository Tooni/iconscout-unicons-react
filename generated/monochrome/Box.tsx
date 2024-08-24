import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.23 7.24 12 12 3.77 7.24a2 2 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71"
      className="box_svg__uim-quaternary"
    />
    <path
      d="M12 12v9.5a2.1 2.1 0 0 1-.91-.21L4.5 17.48a2 2 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01z"
      className="box_svg__uim-tertiary"
    />
    <path
      d="M20.5 8.25v7.5a2 2 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01"
      className="box_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBox)
export default ForwardRef
