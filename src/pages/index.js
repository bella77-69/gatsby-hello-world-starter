import React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <div style={{ color: "tomato" }}>
      {" "}
      <h1>Hello world!</h1>
     <Link to="/page-2">Page 2</Link>
    </div>
  )
}
