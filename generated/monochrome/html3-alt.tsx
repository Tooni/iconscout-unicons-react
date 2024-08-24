import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHtml3Alt = (
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
      d="M11.99 22a1 1 0 0 1-.268-.037l-6.473-1.805a1 1 0 0 1-.728-.874L3.08 3.09A1 1 0 0 1 4.075 2h15.85a1 1 0 0 1 .996 1.089l-1.443 16.188a1 1 0 0 1-.728.874l-6.491 1.812a1 1 0 0 1-.269.037"
      className="html3-alt_svg__uim-tertiary"
    />
    <path
      d="M16.777 6.325A1 1 0 0 0 16.04 6H7.96a1 1 0 1 0 0 2h6.987l-.177 2H10a1 1 0 0 0 0 2h4.592l-.264 2.977-2.328.528-2.328-.53-.096-1.064a1 1 0 0 0-1.992.178l.16 1.79a1 1 0 0 0 .775.887l3.26.74a1 1 0 0 0 .443 0l3.26-.74a1 1 0 0 0 .774-.887l.78-8.79a1 1 0 0 0-.259-.764"
      className="html3-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHtml3Alt)
export default ForwardRef
