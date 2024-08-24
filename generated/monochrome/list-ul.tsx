import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgListUl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 8H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 5H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 5H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2M3 8a1 1 0 0 1-.38-.08 1.2 1.2 0 0 1-.33-.21 1.2 1.2 0 0 1-.21-.33.95.95 0 0 1 0-.76 1.2 1.2 0 0 1 .21-.33 1 1 0 0 1 1.09-.21 1 1 0 0 1 .33.21 1.2 1.2 0 0 1 .21.33.94.94 0 0 1 0 .76 1.2 1.2 0 0 1-.21.33A1 1 0 0 1 3 8m0 5a1 1 0 0 1-.38-.08 1.2 1.2 0 0 1-.33-.21 1.2 1.2 0 0 1-.21-.33.95.95 0 0 1 0-.76 1 1 0 0 1 .21-.33 1.2 1.2 0 0 1 .33-.21 1 1 0 0 1 1.09.21 1 1 0 0 1 .21.33.94.94 0 0 1 0 .76 1.2 1.2 0 0 1-.21.33 1.2 1.2 0 0 1-.33.21A1 1 0 0 1 3 13m0 5a1 1 0 0 1-.38-.08 1.2 1.2 0 0 1-.33-.21.99.99 0 0 1-.21-1.09 1 1 0 0 1 .21-.33 1 1 0 0 1 .33-.21 1 1 0 0 1 .76 0 1 1 0 0 1 .33.21 1 1 0 0 1 .21.33.99.99 0 0 1-.21 1.09 1.2 1.2 0 0 1-.33.21A1 1 0 0 1 3 18"
      className="list-ul_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgListUl)
export default ForwardRef
