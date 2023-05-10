import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/employees" state={{data:"hello this is from state 1"}}>
                EMPLOYEES
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li>
                <Link class="nav-link" to="/contactus">
                CONTACT US
                </Link>
            </li>
            <li>
                <Link class="nav-link" to="/feedback">
                    FEEDBACK
                </Link>
            </li>
            
            <li>
                <Link class="nav-link" to="/addStudent">
                    Add Student
                </Link>
            </li>
            
            <li>
                <Link class="nav-link" to="/listStudents">
                    List Students
                </Link>
            </li>
            
            
            
          </ul>
        </div>
      </nav>
      </div>
  )
}
