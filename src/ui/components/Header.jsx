import { Typography } from "../foundations/Typography";
import { Sidebar } from "./Sidebar";
import { PopUp } from "./PopUp";
import React, { useState } from "react";

export function Header({ sidebarIsOpen, setSidebarIsOpen, optConfigIsOpen, setOptConfigIsOpen }) {
    const IconSidebar = <svg className="humbleicons hi-columns-one-two-thirds" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#00504F" strokeLinejoin="round" strokeWidth="1" d="M9 4v16m-5 0h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z" /></svg>;
    const IconUser = <svg className="humbleicons hi-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>;
    const IconConfig = <svg className="humbleicons hi-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10.47 4.32c.602-1.306 2.458-1.306 3.06 0l.218.473a1.684 1.684 0 0 0 2.112.875l.49-.18c1.348-.498 2.66.814 2.162 2.163l-.18.489a1.684 1.684 0 0 0 .875 2.112l.474.218c1.305.602 1.305 2.458 0 3.06l-.474.218a1.684 1.684 0 0 0-.875 2.112l.18.49c.498 1.348-.814 2.66-2.163 2.162l-.489-.18a1.684 1.684 0 0 0-2.112.875l-.218.473c-.602 1.306-2.458 1.306-3.06 0l-.218-.473a1.684 1.684 0 0 0-2.112-.875l-.49.18c-1.348.498-2.66-.814-2.163-2.163l.181-.489a1.684 1.684 0 0 0-.875-2.112l-.474-.218c-1.305-.602-1.305-2.458 0-3.06l.474-.218a1.684 1.684 0 0 0 .875-2.112l-.18-.49c-.498-1.348.814-2.66 2.163-2.163l.489.181a1.684 1.684 0 0 0 2.112-.875l.218-.474Z"/></svg>
    const IconLogout = <svg className="humbleicons hi-logout" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12h-9.5m7.5 3 3-3-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"/></svg>


    return (
        <header className="fixed z-20 w-full h-16 bg-white border-b-2 border-muted">
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 pt-4">
                <div
                    className="sidebar cursor-pointer"
                    onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                >
                    {IconSidebar}
                </div>

                <div>
                    <Typography variant="textSecondary" className="text-lg sm:text-xl lg:text-2xl">
                        O Logo
                    </Typography>
                </div>


                <div className="bg-primary/50 sm:w-14 lg:w-16 sm:h-8 rounded-xl hover:cursor-pointer" onClick={() => setOptConfigIsOpen(!optConfigIsOpen)}>
                    <div className="flex justify-around items-center h-full">
                        {IconUser}
                    </div>
                </div>

                {optConfigIsOpen && (
                    <div className="bg-background w-auto h-auto p-4 shadow-shadowPrimary rounded-lg absolute z-20 right-12 top-16 animate-[popup_0.2s_ease]">
                        <div className="grid gap-4 justify-center text">
                            <div className="flex gap-2 hover:text-primary cursor-pointer">
                                {IconUser}
                                <button className="cursor-pointer">Meu perfil</button>
                            </div>
                            
                            <div className="flex gap-2 hover:text-primary cursor-pointer">
                                {IconConfig}
                                <button className="cursor-pointer">Configuracoes</button>
                            </div>
                            
                            <div className="flex gap-2 hover:text-primary cursor-pointer">
                                {IconLogout}
                                <button className="cursor-pointer">Sair</button>
                            </div>
                            
                        </div>

                    </div>
                )}
            </div>
        </header>
    );
}