import './Upload.css'
import {useAppDispatch, useAppSelector} from "../hooks";
import {selectDescription, selectTitle, setDescription, setTitle} from "./uploadSlice";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {log} from "util";

export function Upload() {
    const title = useAppSelector(selectTitle)
    const description = useAppSelector(selectDescription)

    const dispatch = useAppDispatch()

    function handleFile(e:ChangeEvent<HTMLInputElement>) {
        if (e.target.files === null) return;
        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            //TODO: Upload the file with Redux and update the state with the URL.
            console.log(fileReader.result)
        }
    }
    return (
        <div style={{margin: "auto"}}>
            <div style={{display: "table", margin: "auto"}}>
                <form>
                    <label>
                        Title
                    </label><br/>
                    <textarea value={title} onChange={(e) => {
                        e.preventDefault();
                        dispatch(setTitle(e.target.value))
                    }} style={{height: "120px"}}/><br/>
                    <label>
                        Video
                    </label><br/>
                    <div className={"videoprev"} style={{textAlign: "end"}}>
                        {/*<input accept={"video/mp4"} type={"file"} onChange={handleFile}/>*/}
                        <input type={"file"} onChange={handleFile}/>

                    </div>
                    <label>
                        Description
                    </label><br/>
                    <textarea value={description} onChange={(e) => {
                        e.preventDefault();
                        dispatch(setDescription(e.target.value))
                    }} style={{height: "120px"}}/><br/>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <button>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}