import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToiletPaper = (
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
    <ellipse
      cx={7}
      cy={7.993}
      className="toilet-paper_svg__uim-primary"
      rx={1}
      ry={1.25}
    />
    <path
      d="M7 2C4.243 2 2 4.691 2 8s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6m0 7.243a1.146 1.146 0 0 1-1-1.25 1.146 1.146 0 0 1 1-1.25 1.146 1.146 0 0 1 1 1.25 1.146 1.146 0 0 1-1 1.25"
      className="toilet-paper_svg__uim-tertiary"
    />
    <path
      d="M22.76 20.35A7.5 7.5 0 0 1 21 15.459V8c0-3.309-2.243-6-5-6H7c2.757 0 5 2.691 5 6v7.459a9.5 9.5 0 0 0 2.24 6.191A1 1 0 0 0 15 22h7a1 1 0 0 0 .76-1.65"
      className="toilet-paper_svg__uim-quaternary"
    />
    <path
      d="M12 8c0 3.309-2.243 6-5 6h5Z"
      className="toilet-paper_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgToiletPaper)
export default ForwardRef
