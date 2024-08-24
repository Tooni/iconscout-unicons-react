import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAppleAlt = (
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
    <g className="apple-alt_svg__uim-primary" data-name="Brand Logos">
      <path d="M17.594 12.625a4.52 4.52 0 0 1 2.162-3.805 4.67 4.67 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.83.917-.789 0-2.008-.894-3.3-.87A4.9 4.9 0 0 0 4.83 9.392c-1.763 3.06-.45 7.593 1.267 10.076.84 1.214 1.843 2.581 3.158 2.532 1.268-.05 1.746-.82 3.277-.82 1.53 0 1.961.82 3.3.795 1.364-.025 2.229-1.239 3.062-2.457a11 11 0 0 0 1.384-2.845 4.42 4.42 0 0 1-2.684-4.047Z" />
      <path d="M15.216 5.04A5.56 5.56 0 0 0 16.536 1a5.67 5.67 0 0 0-3.73 1.92l-.02.047a5.56 5.56 0 0 0-1.32 4.04 5.67 5.67 0 0 0 3.73-1.92Z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgAppleAlt)
export default ForwardRef
