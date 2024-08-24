import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipV = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"
      className="flip-v_svg__uim-quaternary"
    />
    <path d="m21 12-5-5v10z" className="flip-v_svg__uim-primary" />
    <path
      d="M16 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 18m1-8.586v5.172L19.586 12Z"
      className="flip-v_svg__uim-primary"
    />
    <path
      d="M3 13a.99.99 0 0 1-.92-1.38 1.2 1.2 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1 1 0 0 1 .21.33A.84.84 0 0 1 4 12a.99.99 0 0 1-1 1m1.79 2.21a1.01 1.01 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.01 1.01 0 0 1 0 1.42 1.03 1.03 0 0 1-.71.29 1.03 1.03 0 0 1-.71-.29M8 18a1 1 0 0 1-.71-.29 1.2 1.2 0 0 1-.21-.33A1 1 0 0 1 7 17a1.05 1.05 0 0 1 .29-.71 1.04 1.04 0 0 1 1.09-.21 1.2 1.2 0 0 1 .33.21A1.05 1.05 0 0 1 9 17a1 1 0 0 1-.08.38 1.2 1.2 0 0 1-.21.33A1 1 0 0 1 8 18m-1-4.33a.996.996 0 0 1 1-1 .996.996 0 0 1 1 1 1.003 1.003 0 0 1-1 1 1.003 1.003 0 0 1-1-1m0-3.34a1.003 1.003 0 0 1 1-1 1.003 1.003 0 0 1 1 1 .997.997 0 0 1-1 1 .997.997 0 0 1-1-1M8 8a.99.99 0 0 1-.92-1.38 1 1 0 0 1 .21-.33.985.985 0 0 1 1.63.33A.99.99 0 0 1 8 8m-3.21 2.21a1.01 1.01 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.01 1.01 0 0 1 0 1.42 1.03 1.03 0 0 1-.71.29 1.03 1.03 0 0 1-.71-.29"
      className="flip-v_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipV)
export default ForwardRef
