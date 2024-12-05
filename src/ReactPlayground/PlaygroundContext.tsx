import React, { createContext, PropsWithChildren, useState } from "react";
import {fileName2Language} from "./utils"
import { initFiles } from "./files";
export interface File {
    name: string,
    value: string,
    language: string
}
//每个键都是一个字符串，对应的值都是一个符合File接口的对象。
// {'a':file对象,'b':file对象}
export interface Files {
    [key: string]: File
}

export interface PlaygroundContext {
    files: Files
    selectedFileName: string
    setSelectedFileName: (fileName: string) => void
    setFiles: (files: Files) => void
    addFile: (fileName: string) => void
    removeFile: (fileName: string) => void
    updateFileName: (oldFieldName: string, newFieldName: string) => void
}
//as PlaygroundContext 是一个类型断言，表示这个对象符合 PlaygroundContext 类型。
export const PlaygroundContext = createContext<PlaygroundContext>({
    selectedFileName: 'App.tsx',
} as PlaygroundContext);

export const PlaygroundProvider = (props: PropsWithChildren) => {
    const { children } = props;
    const [files, setFiles] = useState<Files>(initFiles);
    const [selectedFileName, setSelectedFileName] = useState<string>('App.tsx');
    const addFile = (name: string) => {
        files[name] = {
            name,
            value: '',
            language: fileName2Language(name)
        }
        setFiles(files)
    }
    const removeFile = (name: string) => {
        delete files[name];
        setFiles({...files });
    }
    const updateFileName = (oldFieldName: string, newFieldName: string) => {
        if(!oldFieldName||newFieldName=='undefined'||newFieldName==null)
        return
        //结构复制 value为变量，对应files  oldFieldName为(['key']):value
        const {[oldFieldName]:value, ...rest} = files;
    }
    return (
        <PlaygroundContext.Provider value={{
            files,
            selectedFileName,
            setSelectedFileName,
            setFiles,
            addFile,
            removeFile,
            updateFileName
        }}>
            {children}
        </PlaygroundContext.Provider>
    )

}