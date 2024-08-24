import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPaperclip = (
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
    <path d="m18.188 13.379-6.011 6.01a5 5 0 0 1-7.072-7.07l8.486-8.486a3 3 0 1 1 4.243 4.242l-7.778 7.779a1.024 1.024 0 0 1-1.414 0 1 1 0 0 1 0-1.415l5.302-5.303.007-.007a.5.5 0 1 0-.714-.7l-5.302 5.303-.001.001a2 2 0 0 0 0 2.828 2.05 2.05 0 0 0 2.829 0l7.778-7.779a4 4 0 0 0-5.657-5.656l-8.486 8.485a6 6 0 0 0 4.244 10.243 5.96 5.96 0 0 0 4.242-1.758l6.01-6.01.008-.007a.5.5 0 0 0-.715-.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgPaperclip)
export default ForwardRef
