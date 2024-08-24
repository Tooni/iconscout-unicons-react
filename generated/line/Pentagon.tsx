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
    <path d="m21.59 9.17-9-6.54a1 1 0 0 0-1.18 0l-9 6.54a1 1 0 0 0-.36 1.12l3.44 10.58a1 1 0 0 0 1 .69h11.07a1 1 0 0 0 1-.69L22 10.29a1 1 0 0 0-.41-1.12m-4.75 10.39H7.16l-3-9.2L12 4.68l7.82 5.68Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPentagon)
export default ForwardRef
