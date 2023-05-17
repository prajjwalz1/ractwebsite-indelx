import React from 'react'
import Link from 'next/link'

const Breadcrumbs = () => {
  return (
    <>
    
    <div id="breadcrumb" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="breadcrumb-tree">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">All Categories</Link></li>
              <li><Link href="#">Accessories</Link></li>
              <li><Link href="#">Headphones</Link></li>
              <li className="active">Product name goes here</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Breadcrumbs