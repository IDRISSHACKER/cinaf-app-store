import React from "react"
import { motion } from 'framer-motion';
import "./DownloadBtn.scss"


function DownloadBtn({children, startIcon, to="/"}:any){
    console.log(to)
    return <motion.div>
            <motion.button className="downloadBtn">
                <motion.div className="startIcon" key={"1"}>{startIcon}</motion.div>
                <motion.div className="enterText" key={"2"}>{children}</motion.div>
                <motion.div className="endIcon" key={"3"}></motion.div>
            </motion.button>
        </motion.div>
}

export default DownloadBtn



