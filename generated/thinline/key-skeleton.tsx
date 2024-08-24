import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeySkeleton = (
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
    <path d="M21.853 2.159a.5.5 0 0 0-.707-.013l-1.89 1.89c-.01.009-.022.012-.03.022-.009.008-.012.02-.02.028l-9.911 9.912A4.46 4.46 0 0 0 6.5 13a4.5 4.5 0 1 0 4.5 4.5 4.46 4.46 0 0 0-.998-2.795l6.757-6.757 2.473 2.474a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707L17.466 7.24l2.121-2.121 1.06 1.059a.5.5 0 0 0 .706 0 .5.5 0 0 0 0-.707l-1.059-1.06 1.56-1.559a.5.5 0 0 0 0-.694M6.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeleton)
export default ForwardRef
