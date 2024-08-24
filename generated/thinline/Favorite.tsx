import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFavorite = (
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
    <path d="M21.919 10.127a1 1 0 0 0-.845-1.136l-5.651-.826-2.526-5.147a1.037 1.037 0 0 0-1.795.001L8.577 8.165l-5.651.826a1 1 0 0 0-.556 1.704l4.093 4.013-.966 5.664a1.002 1.002 0 0 0 1.453 1.052l5.05-2.67 5.049 2.669a1 1 0 0 0 1.454-1.05l-.966-5.665 4.094-4.014a1 1 0 0 0 .288-.567m-5.269 4.05a.5.5 0 0 0-.143.441l1.01 5.921-5.284-2.793a.5.5 0 0 0-.466 0L6.483 20.54l1.01-5.922a.5.5 0 0 0-.143-.441L3.07 9.98l5.912-.864a.5.5 0 0 0 .377-.275L12 3.46l2.64 5.382a.5.5 0 0 0 .378.275l5.913.863z" />
  </svg>
)
const ForwardRef = forwardRef(SvgFavorite)
export default ForwardRef
