import React from "react";
import { useContext } from "react";
import { UsersContext } from "../Context";
import LoadingIcon from '../assets/Loading.gif'
import UserData from "./UserData";

const Table = () => {

    const users = useContext(UsersContext)

    return (
        <div className="mx-10 mt-10">
            {
                users.length === 0 ? (
                    <div className="">
                        <div className="absolute top-0 right-0 w-screen h-screen flex items-center justify-center">
                            <img className="w-10 m-auto " src={LoadingIcon} alt='' />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col border-x-2 border-main-color">
                        <div className="flex w-full h-16 bg-main-color text-white text-2xl">
                            <div className="table-cell">name</div>
                            <div className="table-cell">email</div>
                            <div className="table-cell">city</div>
                        </div>
                        <div>
                        {
                            users.map((user) => {
                                return <UserData key={user.id} user={user}/>
                            })
                        }   
                        </div>
                    </div>
                    
                          
                )
            }
        </div>
    )
}

export default Table;