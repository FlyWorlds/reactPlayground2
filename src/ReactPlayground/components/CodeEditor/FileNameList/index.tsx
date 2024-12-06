import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../../../PlaygroundContext"
import { FileNameItem } from "./FileNameItem"
import styles from './index.module.scss'
export default function FileNameList() {
    // 从上下文中获取文件列表、更新文件名、选中文件名等函数
    const { 
        files, 
        // removeFile, 
        // addFile, 
        updateFileName, 
        selectedFileName,
        setSelectedFileName
    } = useContext(PlaygroundContext)

    // 初始化 tabs 状态
    const [tabs, setTabs] = useState([''])

    // 当文件列表发生变化时，更新 tabs 状态
    useEffect(() => {
        setTabs(Object.keys(files))
    }, [files])

    // 处理文件名编辑完成事件
    const handleEditComplete = (name: string, prevName: string) => {
        updateFileName(prevName, name);
        setSelectedFileName(name);
    }

    return <div className={styles.tabs}>
        {
            // 遍历 tabs，渲染 FileNameItem 组件
            tabs.map((item, index) => (
                <FileNameItem 
                    key={item + index}
                    isprops={true}  // 添加 isprops 属性  
                    value={item} 
                    actived={selectedFileName === item} 
                    onClick={() => setSelectedFileName(item)}
                    onEditComplete={(name: string) => handleEditComplete(name, item)}
                >
                </FileNameItem>
            ))
        }
    </div>
}
