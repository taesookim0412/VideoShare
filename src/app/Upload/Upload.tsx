import './Upload.css'
import {useAppDispatch, useAppSelector} from "../hooks";
import {
    postVideo,
    selectAuthor,
    selectDescription,
    selectTitle, selectUploadState,
    selectVideo,
    setDescription, setFilename,
    setTitle,
    setVideo
} from "./uploadSlice";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {selectLoggedIn, selectToken} from "../LoginReg/Login/loginSlice";
import {useHistory} from "react-router-dom";

export function Upload() {
    const author = useAppSelector(selectAuthor)
    const title = useAppSelector(selectTitle)
    const description = useAppSelector(selectDescription)
    const video = useAppSelector(selectVideo)
    const token = useAppSelector(selectToken)
    const state = useAppSelector(selectUploadState)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const loggedIn = useAppSelector(selectLoggedIn)

    if (!loggedIn) {
        history.push("/login")
    }

    function handleFile(e:ChangeEvent<HTMLInputElement>) {
        if (e.target.files === null || e.target.files.length < 1) return;
        const file = e.target.files[0]
        if (file.type != "video/mp4") return;
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            dispatch(setVideo(fileReader.result as string))
            dispatch(setFilename(file.name))
        }
    }

    function postRequest() {
        dispatch(postVideo({
            state: state,
            token: token,
            history: history
        }))

    }

    return (
        <div style={{margin: "auto"}}>
            <div style={{display: "table", margin: "auto"}}>
                <form onSubmit={(e) => { e.preventDefault(); postRequest()}}>
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
                        <input accept={"video/mp4"} type={"file"} onChange={handleFile}/>

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