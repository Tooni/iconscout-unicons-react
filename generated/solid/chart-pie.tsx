import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChartPie = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 2c4 0 7.4 3 7.9 7H12zm4 14.9L12.6 13H20c-.4 2.5-1.8 4.7-4 5.9" />
  </svg>
)
const ForwardRef = forwardRef(SvgChartPie)
export default ForwardRef
