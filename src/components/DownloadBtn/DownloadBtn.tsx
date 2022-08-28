import React from "react"
import { motion } from 'framer-motion';
import "./DownloadBtn.scss"
import { Link } from "react-router-dom";


function DownloadBtn({children, startIcon, to="/"}:any){
    console.log(to)
    return <motion.div>
            <Link to={to} className="downloadBtn">
                <motion.div className="" key={"1"}>{startIcon}</motion.div>
                <motion.div className="enterText" key={"2"}>{children}</motion.div>
                <motion.div className="endIcon" key={"3"}></motion.div>
            </Link>
        </motion.div>
}

export default DownloadBtn



