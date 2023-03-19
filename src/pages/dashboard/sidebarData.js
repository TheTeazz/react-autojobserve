import React from 'react'
import { BsChevronBarDown } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";

export const sidebarData = [
    {
        title: "Overview",
        icon: '',
        link: "/dashboard",
        id: 1
    },
    {
        title: "Job Matches",
        icon: <BsFillHandThumbsDownFill/>,
        link: "/job-matches",
        id: 2
    },
    {
        title: "Applications",
        icon: <BsChevronBarDown/>,
        link: "/applications",
        id: 3
    },
    {
        title: "Auto apply",
        icon: <BsFillBellFill/>,
        link: "/auto-apply",
        id: 4
    },
    {
        title: "Profile",
        icon: <BsFillHandThumbsDownFill/>,
        link: "/profile",
        id: 5
    }
]
