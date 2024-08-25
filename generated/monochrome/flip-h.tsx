import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFlipH = (
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
      d="M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"
      opacity={0.25}
    />
    <path d="m12 21 5-5H7z" opacity={1} />
    <path
      d="M12 22a1 1 0 0 1-.707-.293l-5-5A1 1 0 0 1 7 15h10a1 1 0 0 1 .707 1.707l-5 5A1 1 0 0 1 12 22m-2.586-5L12 19.586 14.586 17Z"
      opacity={1}
    />
    <path
      d="M12 4a.99.99 0 0 1-.92-1.38 1 1 0 0 1 .21-.33 1 1 0 0 1 1.09-.21 1 1 0 0 1 .33.21A1.05 1.05 0 0 1 13 3a.84.84 0 0 1-.08.38 1.2 1.2 0 0 1-.21.33A1 1 0 0 1 12 4M8.79 6.21a1.01 1.01 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.01 1.01 0 0 1 0 1.42 1.03 1.03 0 0 1-.71.29 1.03 1.03 0 0 1-.71-.29M7 9a.99.99 0 0 1-1-1 1 1 0 0 1 1.71-.71A1.05 1.05 0 0 1 8 8a.99.99 0 0 1-1 1m5.67-1a.997.997 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 .997.997 0 0 1-1-1M9.33 8a1.003 1.003 0 0 1 1-1 .997.997 0 0 1 1 1 .997.997 0 0 1-1 1 1.003 1.003 0 0 1-1-1M17 9a.99.99 0 0 1-1-1 1 1 0 1 1 2 0 .99.99 0 0 1-1 1m-3.21-2.79a1.01 1.01 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.01 1.01 0 0 1 0 1.42 1.03 1.03 0 0 1-.71.29 1.03 1.03 0 0 1-.71-.29"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipH)
export default ForwardRef
