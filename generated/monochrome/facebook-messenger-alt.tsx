import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFacebookMessengerAlt = (
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
    <g data-name="Brand Logos">
      <path
        d="M12 2a9.65 9.65 0 0 0-10 9.7 9.5 9.5 0 0 0 3.14 7.175.8.8 0 0 1 .27.57l.055 1.779a.8.8 0 0 0 1.122.708l1.984-.875a.8.8 0 0 1 .534-.04A10.9 10.9 0 0 0 12 21.4 9.705 9.705 0 1 0 12 2"
        opacity={0.5}
      />
      <path
        d="M6.499 14.772a1 1 0 0 1-.765-1.642l3.052-3.636a.996.996 0 0 1 1.29-.21l3.346 2.056 2.312-2.755a1 1 0 1 1 1.532 1.285l-2.867 3.416a1 1 0 0 1-1.289.21L9.764 11.44l-2.498 2.975a1 1 0 0 1-.767.357"
        opacity={1}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgFacebookMessengerAlt)
export default ForwardRef
