import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgYoutube = (
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
      d="M15.663 11.775c-2.017-1.078-3.948-2.078-5.922-3.112v6.19c2.077-1.13 4.267-2.164 5.931-3.087z"
      className="youtube_svg__uim-tertiary"
    />
    <path
      d="M22.974 9.715a8.54 8.54 0 0 0-.914-4.13 2.87 2.87 0 0 0-1.715-1.017 81 81 0 0 0-8.337-.293 81 81 0 0 0-8.336.293c-.55.102-1.058.36-1.466.741-.895.83-.96 2.251-1.095 3.449a47.5 47.5 0 0 0 0 6.482c.025.676.126 1.347.302 2 .12.506.362.974.707 1.363.408.402.928.672 1.491.775a45 45 0 0 0 6.5.328c3.495.056 6.573-.003 10.199-.276a2.9 2.9 0 0 0 1.534-.784c.273-.272.48-.602.604-.966.362-1.095.54-2.243.526-3.396.034-.595.034-3.974 0-4.57zm-7.31 2.06-.004-.002c-.83.46-1.788.946-2.798 1.459a125 125 0 0 0-3.121 1.62v-6.19c.987.518 1.963 1.027 2.945 1.54.98.514 1.967 1.033 2.974 1.57l.012-.006z"
      className="youtube_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgYoutube)
export default ForwardRef
