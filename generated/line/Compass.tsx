import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCompass = (
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
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 17.93V19a1 1 0 0 0-2 0v.93A8 8 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93A8 8 0 0 1 11 4.07V5a1 1 0 0 0 2 0v-.93A8 8 0 0 1 19.93 11H19a1 1 0 0 0 0 2h.93A8 8 0 0 1 13 19.93m2.14-12.38-5 2.12a1 1 0 0 0-.52.52l-2.12 5a1 1 0 0 0 .21 1.1 1 1 0 0 0 .7.3.9.9 0 0 0 .4-.09l5-2.12a1 1 0 0 0 .52-.52l2.12-5a1 1 0 0 0-1.31-1.31m-2.49 5.1-2.28 1 1-2.28 2.28-1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCompass)
export default ForwardRef
