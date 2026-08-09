import React, { useState } from "react";
import { Typography } from "../ui/foundations/Typography";
import { Card } from "../ui/components/Card";
import { Sidebar } from "../ui/components/Sidebar";
import { PopUp } from "../ui/components/PopUp";
import { Link } from "react-router-dom";
import { Header } from "../ui/components/Header";

import wordsPronunce from "../test/WordsPronunce";

export function Pronunce() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const [selectedWord, setSelectedWord] = useState(null);

    const IconEdit = <svg className="humbleicons hi-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13.5 7.5 3 3M4 20v-3.5L15.293 5.207a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414L7.5 20H4z" /></svg>;

    const IconAudio = <svg className="humbleicons hi-volume-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g stroke="#04C7C8" strokeWidth="1"><path strokeLinejoin="round" d="M6 9H3v6h3l5 4V5L6 9z" /><path strokeLinecap="round" d="M18.5 5.5a9.192 9.192 0 0 1 0 13M15 8a5.657 5.657 0 0 1 0 8" /></g></svg>

    const IconSearch = (
        <svg className="humbleicons hi-search" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
        >
            <g stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="m20 20-6-6" />
                <path d="M15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" />
            </g>
        </svg>
    );

    return (
        <>
            <Header sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />

            <Sidebar isOpen={sidebarIsOpen} onSidebarClick={() => setSidebarIsOpen(false)}></Sidebar>
            <div className="min-h-screen w-full bg-background">

                <div className="relative group h-40 sm:h-52 lg:h-60 w-full bg-black">
                    <div className="absolute bottom-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 h-8 w-12 flex items-center justify-center rounded-xl bg-primary/50 cursor-pointer">
                        {IconEdit}
                    </div>
                </div>

                <div className={`py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${sidebarIsOpen ? "lg:ml-72 md:ml-60" : "mx-12 lg:mx-40 md:mx-36"}`}>
                    <div className="grid gap-4 xl:flex xl:justify-between ">
                        <div className="grid mb-8 gap-4">
                            <Typography variant="title" className="text-2xl sm:text-3xl">Pronúncia</Typography>
                            <Typography variant="muted">Consulte a pronúncia de novas palavras</Typography>
                        </div>

                        <div className="relative w-70 lg:w-64 mt-4">
                            <input
                                type="search"
                                placeholder="Buscar palavras"
                                className="w-full h-8 border border-muted rounded-2xl pl-2 pr-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
                            />

                            <div className="absolute right-3 top-2 z-50">
                                {IconSearch}
                            </div>
                        </div>
                    </div>

                    <div className="cardsWords grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wordsPronunce.map((word) => (
                            <Card key={word.id} onClick={() => { setPopupIsOpen(true); setSelectedWord(word); }} className="cursor-pointer">
                                <Typography className="text-sm md:text-sm xl:text-md">
                                    {word.word}
                                </Typography>
                            </Card>
                        ))}
                    </div>

                    <PopUp isOpen={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
                        <div>
                            {selectedWord && (
                                <div className="grid gap-4 ml-8 mb-8">
                                    <Typography className="text-2xl">{selectedWord.word}</Typography>
                                    <div className="flex gap-20">
                                        {selectedWord.region.map((item) => (
                                            <div key={item.region} className="flex gap-4">
                                                <Typography>{item.region}</Typography>
                                                <div className="flex gap-1 cursor-pointer">
                                                    <div onClick={() => new Audio(item.pronunceAudio).play()}>
                                                        {IconAudio}
                                                    </div>

                                                    <Typography className="text-primary">{item.pronunceText}</Typography>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                    <Typography variant="title" className="mt-4">{selectedWord.meaning}</Typography>

                                </div>

                            )}

                        </div>
                    </PopUp>


                </div>

            </div>
        </>

    )
}