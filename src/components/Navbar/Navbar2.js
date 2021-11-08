import React from "react";
import logo from "../logo2.png"

export default function Navbar2() {
    return(
        <div class="navbar shadow-lg bg-black text-neutral-content">
            <div class="px-2 mx-2 navbar-start">
                <img  src={logo} width='150px'/>
            </div> 
            <div class="hidden px-2 mx-2 navbar-center lg:flex">
                <div class="flex items-stretch">
                    <a class="btn btn-ghost btn-sm rounded-btn">
                    Consumer
                    </a> 
                    <a class="btn btn-ghost btn-sm rounded-btn">
                    Professional
                    </a> 
                    <a class="btn btn-ghost btn-sm rounded-btn">
                    Accessories
                    </a> 
                    <a class="btn btn-ghost btn-sm rounded-btn">
                    Repair
                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn">
                    About Us
                    </a> 
                    <a class="btn btn-ghost btn-sm rounded-btn">
                    Contact Us
                    </a>
                </div>
            </div> 
            <div class="navbar-end">
                <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button> 
                <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
                </button>
                <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                </button>
            </div>
        </div>

    )
}