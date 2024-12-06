import classnames from "classnames";
import React, { useState, useRef, useEffect } from "react";

import styles from "./index.module.scss";

export interface FileNameItemProps {
  // 这里应该去修改 files 里的文件名
  onEditComplete: (name: string) => void;
  isprops: boolean;
  value: string;
  actived: boolean;
  key: string;
  onClick: () => void;
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  console.log("props", props);
  const { value, actived = false, onClick, onEditComplete} = props;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDoubleClick = () => {
    setEditing(true);
    //在某些情况下，需要在组件渲染后再访问到ref,直接访问会出现undefined的情况，所以需要使用setTimeout
    //因为react的渲染是异步的（微任务），所以需要使用setTimeout（宏任务）
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  //失去焦点时，编辑状态editing变为false
  const handleInputBlur = () => {
    setEditing(false);
    //修改tab的文件名后，响应到修改file的文件名称
    onEditComplete(name);
  }
  //classnames作用是根据条件动态添加class
  return (
    <div
      className={classnames(
        styles["tab-item"],
        actived ? styles.actived : null
      )}
      onClick={onClick}
    >
      {/* change时候setName，改变name，类似双向绑定 */}
      {editing ? (
        <input
          className={styles['tabs-item-input']}
          ref={inputRef}
          value={name}
          onBlur={handleInputBlur}
          onChange={(e) => setName(e.target.value)}
        ></input>
      ) : (
        <span onDoubleClick={handleDoubleClick}>{name}</span>
      )}
    </div>
  );
};
interface Props {
  index: number;
}
export const FileNameItem2 = (props: Props) => {
  const { index } = props;
  return (
    <div>
      <span>{index + 1}</span>
    </div>
  );
};
