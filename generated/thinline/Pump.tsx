import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPump = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m20.682 6.975-.828-.828-2.975-2.976a.5.5 0 1 0-.707.707l1.747 1.748-.935 2.492a2.51 2.51 0 0 0 .573 2.646L21 14.207V19c0 1.103-.897 2-2 2s-2-.897-2-2v-2.5c0-1.379-1.121-2.5-2.5-2.5H14V4.5C14 3.122 12.879 2 11.5 2h-7A2.503 2.503 0 0 0 2 4.5v15C2 20.879 3.122 22 4.5 22h7c1.379 0 2.5-1.121 2.5-2.5V15h.5c.827 0 1.5.673 1.5 1.5V19c0 1.654 1.346 3 3 3s3-1.346 3-3v-8.843c0-1.184-.48-2.344-1.318-3.182M13 19.5c0 .827-.673 1.5-1.5 1.5h-7c-.827 0-1.5-.673-1.5-1.5V11h10zm0-9.5H3V4.5C3 3.673 3.673 3 4.5 3h7c.827 0 1.5.673 1.5 1.5zm8 2.793-2.736-2.735a1.51 1.51 0 0 1-.344-1.588l.775-2.067 1.28 1.28A3.53 3.53 0 0 1 21 10.156z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPump)
export default ForwardRef
