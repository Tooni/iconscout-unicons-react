import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPolygon = (
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
      d="M16.5 20.794h-9a1 1 0 0 1-.866-.5l-4.5-7.794a1 1 0 0 1 0-1l4.5-7.794a1 1 0 0 1 .866-.5h9a1 1 0 0 1 .866.5l4.5 7.794a1 1 0 0 1 0 1l-4.5 7.794a1 1 0 0 1-.866.5"
      className="polygon_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPolygon)
export default ForwardRef
