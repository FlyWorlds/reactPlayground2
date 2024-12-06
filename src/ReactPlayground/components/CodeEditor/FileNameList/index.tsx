import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../../../PlaygroundContext"

import { FileNameItem } from "./FileNameItem"
import { FileNameItem2 } from "./FileNameItem"
import styles from './index.module.scss'
export default function FileNameList() {
    const {
        files,
        removeFile,
        addFile,
        updateFileName,
        selectedFileName,
        setSelectedFileName
    } = useContext(PlaygroundContext)

    const [tabs, setTabs] = useState([''])

    useEffect(() => {
        setTabs(Object.keys(files))
    }, [files])

    return <div className={styles.tabs}>
        <div>

        </div>
        {
            tabs.map((item, index) => (
                    <FileNameItem
                        key={index+item}
                        value={item}
                        isprops='2222'
                        actived={selectedFileName === item}
                        onClick={() => setSelectedFileName(item)}>
                    </FileNameItem>
            ))
        }
    </div>
}
