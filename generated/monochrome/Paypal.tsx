import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPaypal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.882 19.94a1 1 0 0 1-.988.843H4.062a1.533 1.533 0 0 1-1.515-1.785l2.59-16.406A1.89 1.89 0 0 1 7 1h6.214c2.56 0 4.408.62 5.492 1.843a4.96 4.96 0 0 1 1.08 4.395c-.021.135-.043.27-.075.418-.823 4.218-3.655 6.457-8.186 6.457H9.807zm-4.36-.628-.001.006zM7.113 2.897v.002z"
      className="paypal_svg__uim-tertiary"
    />
    <path
      d="M20.437 7.104a4 4 0 0 0-.545-.508 5 5 0 0 1-.106.642c-.021.135-.043.27-.075.418-.823 4.218-3.655 6.457-8.186 6.457H9.807l-.925 5.827a1 1 0 0 1-.988.843H6.727l-.082.52A1.467 1.467 0 0 0 8.093 23h3.234a1.76 1.76 0 0 0 1.751-1.469l.64-4.031.012-.055h.298c4.033 0 6.551-1.993 7.286-5.762a5.15 5.15 0 0 0-.877-4.578"
      className="paypal_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPaypal)
export default ForwardRef