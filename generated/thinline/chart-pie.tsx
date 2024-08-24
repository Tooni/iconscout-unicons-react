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
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m.5 1.03c4.56.252 8.215 3.923 8.46 8.486H12.5zM12 21c-4.963 0-9-4.037-9-9 0-4.794 3.77-8.713 8.5-8.975V12a.5.5 0 0 0 .067.25l4.488 7.774A8.9 8.9 0 0 1 12 21m4.917-1.482-4.042-7.002h8.076a9 9 0 0 1-4.034 7.002" />
  </svg>
)
const ForwardRef = forwardRef(SvgChartPie)
export default ForwardRef
