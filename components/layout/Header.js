import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 text-center text-md-start">
    <div className="container">
      <div className="row gx-5">
        <div className="col-sm-12">
          <Link
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="titleHeader">Editable Forms for Events</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
  )
}
