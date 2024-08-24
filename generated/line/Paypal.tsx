import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPaypal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M20.437 7.104a4 4 0 0 0-.573-.523 4.72 4.72 0 0 0-1.157-3.74C17.623 1.619 15.775 1 13.214 1H7.001a1.89 1.89 0 0 0-1.864 1.592l-2.59 16.406a1.533 1.533 0 0 0 1.516 1.785h2.664l-.082.52A1.467 1.467 0 0 0 8.093 23h3.235a1.76 1.76 0 0 0 1.75-1.47l.641-4.031.011-.055h.299c4.032 0 6.55-1.993 7.285-5.762a5.15 5.15 0 0 0-.877-4.578m-12.595 6.6-.714 4.535-.086.544H4.606L7.097 3h6.117c1.936 0 3.318.404 3.993 1.164a2.97 2.97 0 0 1 .607 2.733l-.018.113c-.012.076-.023.15-.044.246a5.85 5.85 0 0 1-2.005 3.67 6.68 6.68 0 0 1-4.217 1.183H9.707a1.88 1.88 0 0 0-1.865 1.595m11.51-2.405c-.552 2.828-2.243 4.145-5.323 4.145h-.484a1.76 1.76 0 0 0-1.75 1.473l-.65 4.074L8.717 21l.478-3.034.612-3.853h1.719c.157 0 .295-.023.448-.029.359-.012.717-.026 1.053-.068.205-.025.393-.072.59-.108.273-.05.545-.1.801-.171.19-.053.368-.122.55-.186.238-.085.474-.174.697-.279q.25-.12.486-.257a7 7 0 0 0 .613-.392q.214-.153.415-.32a7 7 0 0 0 .537-.52c.113-.12.228-.237.333-.367a7 7 0 0 0 .48-.693c.076-.122.161-.235.232-.363a8.3 8.3 0 0 0 .52-1.154q.015-.034.03-.068.007-.014.014-.032a4.3 4.3 0 0 1 .026 2.193" />
  </svg>
)
const ForwardRef = forwardRef(SvgPaypal)
export default ForwardRef
