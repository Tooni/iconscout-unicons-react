import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHtml3 = (
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
      d="m17.476 6.123-.534 5.994.002.033-.002.074v-.001l-.38 4.192-.041.372L12 18.037v.001l-.004.003-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665-.001.001 2.461-.675.261-2.869H9.576l-.044-.485-.101-1.136-.052-.611h5.538l.202-2.231H6.682l-.044-.485-.1-1.137-.053-.61h11.044z"
      opacity={0.5}
    />
    <path
      d="m3.195 2 1.602 17.994L11.989 22l7.212-2.013L20.805 2zm14.281 4.123-.534 5.994.002.033-.002.074v-.001l-.38 4.192-.041.372L12 18.037v.001l-.004.003-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665-.001.001 2.461-.675.261-2.869H9.576l-.044-.485-.101-1.136-.052-.611h5.538l.202-2.231H6.682l-.044-.485-.1-1.137-.053-.61h11.044z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHtml3)
export default ForwardRef
