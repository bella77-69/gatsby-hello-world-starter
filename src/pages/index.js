import React from "react"
import { Link } from "gatsby"
import Counter from "./counter"
import Layout from "../components/layout"

export default function Home() {
  return (
  <Layout>
    <h1>Funny Cat Memes</h1>
    <div>
    <img src="https://www.catster.com/wp-content/uploads/2015/08/grumpy-cat-meme-00.jpg" alt="funny cate meme"/>
    <br></br>
    <br></br>
    <Counter></Counter>
    <br></br>
    <br></br>
    <Link to="/page-2/">Page 2</Link>
    <br></br>
    <Link to="/counter/">Counter</Link>
  </div>
  </Layout>
  )
}
