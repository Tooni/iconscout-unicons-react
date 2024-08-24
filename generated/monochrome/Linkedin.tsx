import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLinkedin = (
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
      d="M5.086 9.711h3.002v9.031H5.086zm1.501-1.233h-.02a1.565 1.565 0 1 1 .04-3.12 1.565 1.565 0 1 1-.02 3.12m12.325 10.264H15.91v-4.83c0-1.215-.434-2.043-1.52-2.043a1.64 1.64 0 0 0-1.54 1.098 2 2 0 0 0-.1.732v5.043h-3c0-.003.04-8.184 0-9.03h3.002v1.28a2.98 2.98 0 0 1 2.705-1.493c1.975 0 3.456 1.291 3.456 4.065v5.178z"
      className="linkedin_svg__uim-tertiary"
    />
    <path
      d="M20.468 2H3.532a1.45 1.45 0 0 0-1.47 1.433v17.135c.011.8.669 1.442 1.47 1.432h16.936a1.45 1.45 0 0 0 1.47-1.432V3.433A1.45 1.45 0 0 0 20.467 2zM8.088 18.742H5.086V9.711h3.002zM6.833 8.48a1.6 1.6 0 0 1-.246-.002h-.02a1.565 1.565 0 1 1 .04-3.12 1.565 1.565 0 0 1 .226 3.122m12.079 10.262H15.91v-4.83c0-1.215-.434-2.043-1.52-2.043a1.64 1.64 0 0 0-1.54 1.098 2.1 2.1 0 0 0-.1.732v5.043h-3c0-.003.04-8.184 0-9.03h3.002v1.28a2.98 2.98 0 0 1 2.705-1.493c1.975 0 3.456 1.291 3.456 4.065v5.178z"
      className="linkedin_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLinkedin)
export default ForwardRef
