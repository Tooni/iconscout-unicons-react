import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPentagon = (
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
      d="M17.562 21.56H6.437a1 1 0 0 1-.95-.692l-3.438-10.58a1 1 0 0 1 .363-1.117l9-6.54a1 1 0 0 1 1.176 0l9 6.54a1 1 0 0 1 .363 1.117l-3.437 10.58a1 1 0 0 1-.952.692"
      className="pentagon_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPentagon)
export default ForwardRef
