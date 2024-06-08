import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton= (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={300}
    viewBox="0 0 280 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="181" rx="0" ry="0" width="0" height="1" /> 
    <rect x="127" y="317" rx="0" ry="0" width="1" height="2" /> 
    <rect x="12" y="24" rx="0" ry="0" width="153" height="201" /> 
    <rect x="217" y="185" rx="0" ry="0" width="1" height="1" /> 
    <rect x="27" y="237" rx="0" ry="0" width="122" height="26" /> 
    <rect x="199" y="252" rx="0" ry="0" width="1" height="0" /> 
    <rect x="51" y="276" rx="0" ry="0" width="73" height="24" /> 
    <rect x="70" y="289" rx="0" ry="0" width="10" height="0" /> 
    <rect x="27" y="313" rx="0" ry="0" width="121" height="25" />
  </ContentLoader>
)


export default Sceleton