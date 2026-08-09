import React, { useState } from "react";
import { Typography } from "../ui/foundations/Typography";
import { Card } from "../ui/components/Card";
import { Sidebar } from "../ui/components/Sidebar";
import { PopUp } from "../ui/components/PopUp";
import { Link } from "react-router-dom";
import { Header } from "../ui/components/Header";

import words from "../test/Words";

export function Vocabulary() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const [selectedWord, setSelectedWord] = useState(null);
    const [addPopupIsOpen, setAddPopupIsOpen] = useState(false);

    const IconEdit = <svg className="humbleicons hi-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13.5 7.5 3 3M4 20v-3.5L15.293 5.207a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414L7.5 20H4z" /></svg>;

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
                            <Typography variant="title" className="text-2xl sm:text-3xl">Vocabulário</Typography>
                            <Typography variant="muted">Adicione novas palavras</Typography>
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
                        {words.map((word) => (
                            <Card
                                key={word.id}
                                onClick={() => {
                                    setSelectedWord(word);
                                    setPopupIsOpen(true);
                                }}
                                className="cursor-pointer"
                            >
                                <Typography className="text-sm md:text-sm xl:text-md">
                                    {word.word}
                                </Typography>
                            </Card>
                        ))}
                    </div>

                    <PopUp isOpen={popupIsOpen} onClose={() => { setPopupIsOpen(false); setSelectedWord(null); }}>
                        <div className="">
                            {selectedWord && (
                                <div className="grid gap-4 text-center mb-12">
                                    <Typography className="mb-4 text-primary">{selectedWord.word}</Typography>
                                    <Typography>Significado: {selectedWord.pop}</Typography>
                                    <Typography>Pronúncia: {selectedWord.pop}</Typography>
                                </div>
                            )}
                        </div>
                    </PopUp>


                    <div className="flex justify-end mt-16">
                        <button className="bg-primary cursor-pointer w-40 h-10 rounded-2xl" onClick={() => setAddPopupIsOpen(true)}>
                            <Typography variant="default" className="text-white">Adicionar palavra</Typography>
                        </button>
                    </div>

                    <PopUp isOpen={addPopupIsOpen} onClose={() => setAddPopupIsOpen(false)} className="bg-black">
                        <div className="grid gap-8 mx-12 mb-12">
                            <div className="text-center mb-4">
                                <Typography variant="title" className="text-2xl">Adicionar nova palavra</Typography>
                            </div>

                            <div className="grid gap-2">
                                <Typography>Palavra:</Typography>
                                <input type="text" placeholder="Escreva a palavra" className="w-full max-w-2xl h-8 border border-muted rounded-2xl pl-2 pr-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
                            </div>

                            <div className="grid gap-2">
                                <Typography>Traducao direta:</Typography>
                                <input type="text" placeholder="Escreva a traducao direta" className="w-full max-w-2xl h-8 border border-muted rounded-2xl pl-2 pr-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
                            </div>

                            <div className="grid gap-2">
                                <Typography>Significado:</Typography>
                                <textarea placeholder="Escreva o significado da palavra" className="w-full max-w-2xl h-8 border border-muted rounded-2xl pl-2 pr-3 pt-1 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
                            </div>

                            <div className="grid gap-2">
                                <Typography>Frase:</Typography>
                                <textarea placeholder="Escreva uma frase com a palavra" className="w-full max-w-2xl h-8 border border-muted rounded-2xl pl-2 pr-3 pt-1 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary/50" />
                            </div>

                            <button className="bg-primary cursor-pointer w-40 h-10 rounded-2xl justify-self-end" onClick={() => setAddPopupIsOpen(true)}>
                                <Typography variant="default" className="text-white">Adicionar palavra</Typography>
                            </button>
                        </div>
                    </PopUp>
                </div>

            </div>
        </>

    )
}