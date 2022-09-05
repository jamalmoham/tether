import React from 'react'
import "../App.css";


function Nav() {
return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light p-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="/"> <img src='assets/tether1.png' alt='Tether logo' height='80px' /> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse fs-4" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
                <li class="nav-item">
                    <a class="nav-link mx-2 active " aria-current="page" href="/">Our Counselors</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mx-2" href="/">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mx-2" href="/">The Problem</a>
            </li>
            {/* <li class="nav-item dropdown">
                <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tether
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Blog</a></li>
                    <li><a class="dropdown-item" href="#">About Us</a></li>
                    <li><a class="dropdown-item" href="#">Contact us</a></li>
                </ul>
            </li> */}
            </ul>
            <ul class="navbar-nav ms-auto  d-lg-inline-flex">
                <li class="nav-item mx-2 ms-auto">
                    <a class="nav-link  btn rounded-pill signBtn shadow "  href="/" target="blank">
                        <i class="fab fa-google-plus-square text-light ">Sign Up</i>
                    </a>
                </li>
                <li class="nav-item mx-2 ms-auto">
                    <a class="nav-link text-dark btn btn-lg shadow-sm " href="/" target="blank">
                        <i class="fab fa-twitter">Login</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
)
}

export default Nav