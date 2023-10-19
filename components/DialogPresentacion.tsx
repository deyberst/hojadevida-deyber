import {  Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface DialogProps {
    open:boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogPre =( {open,setDialogOpen}:DialogProps)=>{

    return(
        <Dialog open={open} >
            <DialogTitle className="text-center font-black text-white bg-slate-950">
                <span> Que más pues?</span>
            </DialogTitle>
            <DialogContent className=" bg-slate-950">
                <div className="flex flex-col text-gray-400">
                    <span>Gracias por confiar en mí</span>
                    <button className="bg-yellow-500 px-4 my-4 text-white font-semibold rounded-lg hover:scale-110 " onClick={()=>setDialogOpen(false)} >
                        Close       
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export{DialogPre}