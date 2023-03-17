import React from 'react'
import { BsChevronBarDown } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";

export const sidebarData = [
    {
        title: "Overview",
        icon: '',
        link: "/dashboard"
    },
    {
        title: "Job Matches",
        icon: <BsFillHandThumbsDownFill/>,
        link: "/job-matches"
    },
    {
        title: "Applications",
        icon: <BsChevronBarDown/>,
        link: "/applications"
    },
    {
        title: "Auto apply",
        icon: <BsFillBellFill/>,
        link: "/auto-apply"
    },
    {
        title: "Profile",
        icon: <BsFillHandThumbsDownFill/>,
        link: "/profile"
    }
]
