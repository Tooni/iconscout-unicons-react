import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M21 9a1 1 0 0 0 0-2h-1V5h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h3v2H3a1 1 0 0 0 0 2h1v2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-3v-2h3a1 1 0 0 0 0-2h-1v-2h1a1 1 0 0 0 0-2h-3V9ZM8 5h4v2H8Zm8 4v2h-4V9ZM6 9h4v2H6Zm6 4v2H8v-2Zm-2 6H6v-2h4Zm6 0h-4v-2h4Zm2-4h-4v-2h4Zm-4-8V5h4v2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWall)
export default ForwardRef
