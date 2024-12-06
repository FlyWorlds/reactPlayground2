import {transform} from '@babel/standalone'
import { Files } from '../../PlaygroundContext'
import { ENTRY_FILE_NAME } from '../../files'
export  const  bableTransform =(filename:string,code:string,files:Files)=>{
    let result = ''
    try {
        result = transform(code,{
            presets: ['typescript', 'react'],
            filename,
            plugins:[],
            retainLines:true,
        }).code!
        //不能将类型“string | null | undefined”分配给类型“string”。
        //不能将类型“undefined”分配给类型“string”。 加上!非空断言
    }catch{
        console.error('编译报错');
    }
    return result
}
export const complile = (files:Files)=>{
    const main = files[ENTRY_FILE_NAME];
    return bableTransform(ENTRY_FILE_NAME,main.value,files)
}