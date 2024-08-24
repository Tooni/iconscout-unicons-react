import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFolderHeart = (
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
    <path d="M12 9.84a2.92 2.92 0 0 0-3.43 4.65l2.72 2.72a1 1 0 0 0 1.42 0l2.72-2.72A2.92 2.92 0 0 0 12 9.84m2 3.23-2 2-2-2a.92.92 0 0 1 0-1.3.92.92 0 0 1 1.3 0 1 1 0 0 0 1.42 0 .92.92 0 0 1 1.3 1.3Zm5-7.57h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFolderHeart)
export default ForwardRef
