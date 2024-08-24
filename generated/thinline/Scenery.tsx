import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgScenery = (
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
    <path d="M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14c.182 0 .362-.022.54-.055q.098-.02.193-.047a3 3 0 0 0 .531-.187q.125-.061.245-.133c.075-.044.151-.086.222-.136l.018-.011.021-.018c.014-.011.03-.017.043-.03q.009-.01.015-.022A2.99 2.99 0 0 0 22 19V5a3.003 3.003 0 0 0-3-3m.575 18.905A2 2 0 0 1 19 21H5a2.003 2.003 0 0 1-2-2v-4.725l3.763-3.762a1.753 1.753 0 0 1 2.474 0l3.405 3.404.004.007 6.97 6.969zM21 19c0 .516-.202.982-.523 1.337l-6.769-6.768 1.056-1.055a1.787 1.787 0 0 1 2.472 0L21 16.277zm0-4.137-3.057-3.056a2.75 2.75 0 0 0-3.886 0L13 12.862 9.944 9.806a2.753 2.753 0 0 0-3.888 0L3 12.86V5a2.003 2.003 0 0 1 2-2h14a2.003 2.003 0 0 1 2 2zM13.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgScenery)
export default ForwardRef
