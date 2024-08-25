import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMicroscope = (
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
    <path
      d="M11.441 13.604a1 1 0 0 1-.707-.293L7.198 9.772a1 1 0 0 1 0-1.414l6.363-6.363a1 1 0 0 1 .39-.242l2.121-.707a1 1 0 0 1 1.024.242l2.122 2.121a1 1 0 0 1 .241 1.024l-.708 2.122a1 1 0 0 1-.241.39l-6.362 6.366a1 1 0 0 1-.707.293m6.362-7.366"
      opacity={0.25}
    />
    <path
      d="m7.198 9.772-1.416 1.415a1 1 0 0 0 0 1.415l2.122 2.12a1 1 0 0 0 1.414 0l1.414-1.413Z"
      opacity={0.5}
    />
    <path
      d="M8 18.005H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"
      opacity={1}
    />
    <path
      d="M20 23.005H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M14.816 21.005a3 3 0 0 0 .184-1 3 3 0 0 0-6 0 3 3 0 0 0 .184 1Z"
      opacity={0.25}
    />
    <path
      d="m17.873 7.583-1.415 1.415A5.96 5.96 0 0 1 18 13.005a6.05 6.05 0 0 1-3.455 5.431 2.97 2.97 0 0 1 .455 1.57 3 3 0 0 1-.04.407A8.04 8.04 0 0 0 20 13.005a7.95 7.95 0 0 0-2.127-5.422M9.42 18.499a7 7 0 0 1-1.095-.56 1 1 0 0 1-.326.066H5.326a8.9 8.9 0 0 0 3.72 2.472A2.7 2.7 0 0 1 9 20.005a2.97 2.97 0 0 1 .42-1.506"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMicroscope)
export default ForwardRef
