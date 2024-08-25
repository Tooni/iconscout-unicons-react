import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFlipVAlt = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M10 21a1 1 0 0 1-.71-.29 1.2 1.2 0 0 1-.21-.33A.8.8 0 0 1 9 20a1 1 0 1 1 2 0 .99.99 0 0 1-1 1m-4.5-1a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1M3 21a1 1 0 0 1-.71-.29 1.2 1.2 0 0 1-.21-.33A1 1 0 0 1 2 20a1.05 1.05 0 0 1 .29-.71 1.047 1.047 0 0 1 1.42 0A1.05 1.05 0 0 1 4 20a1 1 0 0 1-.08.38 1.2 1.2 0 0 1-.21.33A1 1 0 0 1 3 21m.76-4.03a1 1 0 0 1-.73-1.21.994.994 0 0 1 1.21-.73 1 1 0 0 1 .73 1.21A.99.99 0 0 1 4 17a1 1 0 0 1-.24-.03m.99-4a.99.99 0 0 1-.72-1.21 1 1 0 0 1 1.21-.73 1 1 0 0 1 .73 1.21A1 1 0 0 1 5 13a1 1 0 0 1-.25-.03m1.01-4a1 1 0 0 1-.73-1.21.994.994 0 0 1 1.21-.73 1 1 0 0 1 .73 1.21A.99.99 0 0 1 6 9a1 1 0 0 1-.24-.03M7 5a.99.99 0 0 1-1-1 1.05 1.05 0 0 1 .29-.71 1.034 1.034 0 0 1 1.41 0A1.02 1.02 0 0 1 8 4a1.007 1.007 0 0 1-1 1m3 0a.99.99 0 0 1-1-1 1.05 1.05 0 0 1 .29-.71 1.047 1.047 0 0 1 1.42 0A1.05 1.05 0 0 1 11 4a.99.99 0 0 1-1 1M9 16a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1m0-4a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1m0-4a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1"
      opacity={0.5}
    />
    <path d="M14 20h7L17 4h-3z" opacity={1} />
    <path
      d="M21 21h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3a1 1 0 0 1 .97.758l4 16A1 1 0 0 1 21 21m-6-2h4.719l-3.5-14H15Z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipVAlt)
export default ForwardRef
