import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGooglePlay = (
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
    <path
      d="m14.556 12.895 2.573 2.554 3.785-2.186c.506-.253.83-.766.842-1.332a1.47 1.47 0 0 0-.837-1.275 512 512 0 0 1-4.023-2.323l-.002-.002L4.639 1.256a1.64 1.64 0 0 0-1.657-.06q-.075.051-.142.111z"
      className="google-play_svg__uim-tertiary"
    />
    <path
      d="M20.919 10.656a505 505 0 0 1-3.791-2.188l-2.597 2.577L2.785 22.698q.073.066.153.12c.21.12.446.182.687.181.292-.004.578-.084.83-.232.389-.226 12.439-7.182 12.439-7.182l4.02-2.322c.506-.253.83-.766.842-1.332a1.47 1.47 0 0 0-.837-1.275"
      className="google-play_svg__uim-secondary"
    />
    <path
      d="M13.61 11.96 2.84 1.309a1.51 1.51 0 0 0-.597 1.252v18.985c-.013.452.197.871.543 1.15z"
      className="google-play_svg__uim-quaternary"
    />
    <path
      d="M20.919 10.656c-.744-.4-3.37-1.944-3.791-2.188l-2.597 2.577-.921.914.946.936 2.573 2.554 3.785-2.186c.506-.253.83-.766.842-1.332a1.47 1.47 0 0 0-.837-1.275"
      className="google-play_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGooglePlay)
export default ForwardRef
