import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWordpressSimple = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <circle cx={12} cy={12} r={10} opacity={0.25} />
    <path
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2M3.01 12a8.96 8.96 0 0 1 .778-3.66l4.289 11.751A8.99 8.99 0 0 1 3.009 12M12 20.99a9 9 0 0 1-2.54-.366l2.698-7.839 2.763 7.571a1 1 0 0 0 .065.124 9 9 0 0 1-2.986.51m1.239-13.207c.541-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.457.114-2.397.114c-.883 0-2.368-.114-2.368-.114a.372.372 0 0 0-.057.74s.459.058.943.086l1.401 3.838-1.968 5.901-3.274-9.739a18 18 0 0 0 1.03-.085.372.372 0 0 0-.058-.741s-1.456.114-2.396.114c-.17 0-.368-.004-.579-.01a8.988 8.988 0 0 1 13.583-1.693c-.039-.002-.076-.007-.116-.007a1.557 1.557 0 0 0-1.51 1.596 4.2 4.2 0 0 0 .883 2.109 4.74 4.74 0 0 1 .741 2.48 10.9 10.9 0 0 1-.684 2.906l-.897 2.996Zm3.281 11.987 2.746-7.94a8.5 8.5 0 0 0 .684-3.22 7 7 0 0 0-.06-.925 8.99 8.99 0 0 1-3.37 12.085"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWordpressSimple)
export default ForwardRef
