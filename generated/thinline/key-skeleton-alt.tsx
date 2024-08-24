import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeySkeletonAlt = (
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
    <path d="M21.853 2.159a.5.5 0 0 0-.707-.013L15.714 7.58q-.012.007-.024.016-.007.01-.014.022l-6.382 6.38A4.46 4.46 0 0 0 6.5 13a4.5 4.5 0 1 0 4.5 4.5 4.46 4.46 0 0 0-.999-2.795l6.05-6.05 1.767 1.768a.5.5 0 0 0 .707-.707l-1.767-1.768 2.122-2.121 1.767 1.768a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707L19.587 5.12l2.266-2.267a.5.5 0 0 0 0-.694M6.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeletonAlt)
export default ForwardRef
