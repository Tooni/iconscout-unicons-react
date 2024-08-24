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
    <path d="m21.795 9.456-9.5-6.923a.5.5 0 0 0-.59 0l-9.5 6.923a.5.5 0 0 0-.18.559l3.628 11.202a.5.5 0 0 0 .476.345H17.87a.5.5 0 0 0 .476-.345l3.629-11.202a.5.5 0 0 0-.181-.559m-4.287 11.107H6.492L3.087 10.05 12 3.557l8.913 6.494z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPentagon)
export default ForwardRef
