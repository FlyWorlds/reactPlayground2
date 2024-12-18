import Editor from "./Editor"
import FileNameList from "./FileNameList"
import { PlaygroundContext } from "../../PlaygroundContext"
import { useContext } from "react"
import { debounce } from "lodash-es"
export default function CodeEditor() {
    const {
        files,
        setFiles,
        selectedFileName,
        setSelectedFileName
    }  = useContext(PlaygroundContext);
    const file = files[selectedFileName];
    // const file = {
    //     name: 'guang.tsx',
    //     value: 'import lodash from "lodash";\n\nconst a = <div>guang</div>',
    //     language: 'typescript'
    // }
    //内容改变，更新文件内容
    function onEditorChange(value?:string) {
        // console.log(...arguments)
        // !为非空断言操作符
        files[file.name].value = value!;
        // files[file.name].value = value as string;
        //防止引用类型的赋值修改原数据
        setFiles({...files});

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <FileNameList/>
        <Editor file={file} onChange={debounce(onEditorChange,500)}/>
    </div>
    )
}
