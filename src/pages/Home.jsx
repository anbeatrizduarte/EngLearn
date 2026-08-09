import React, { useState } from "react";
import { Typography } from "../ui/foundations/Typography";
import { Card } from "../ui/components/Card";
import { Sidebar } from "../ui/components/Sidebar";
import { PopUp } from "../ui/components/PopUp";
import { Link } from "react-router-dom";
import { ExpandableCard } from "../ui/components/ExpandableCard";
import { Header } from "../ui/components/Header";

export function Home() {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [optConfigIsOpen, setOptConfigIsOpen] = useState(false);

    const IconEdit = <svg className="humbleicons hi-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13.5 7.5 3 3M4 20v-3.5L15.293 5.207a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414L7.5 20H4z" /></svg>;

    return (
        <>

            <Header
                sidebarIsOpen={sidebarIsOpen}
                setSidebarIsOpen={setSidebarIsOpen}
                optConfigIsOpen={optConfigIsOpen}
                setOptConfigIsOpen={setOptConfigIsOpen}
            />

            <div className="min-h-screen w-full bg-background">


                <Sidebar isOpen={sidebarIsOpen} onSidebarClick={() => setSidebarIsOpen(false)}></Sidebar>

                

                {/* aqui vai ficar a parte da imagem personalizada de fundo */}
                <div className="relative group h-40 sm:h-52 lg:h-60 w-full bg-black">
                </div>

                {/* */}
                <div className={`py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${sidebarIsOpen ? "lg:ml-72  md:ml-60" : "lg:mx-40 md:mx-36"}`}>
                    <div className="grid mb-8">
                        <Typography variant="title" className="text-2xl sm:text-3xl">Olá, @usuário!</Typography>
                        <Typography variant="muted">Vamos aprender?</Typography>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="grid gap-6">
                            <ExpandableCard titulo="Semana 1" subtitulo="Horas">
                                <div className="grid gap-2">
                                    <Typography>Segunda: 2h</Typography>
                                    <Typography>Terça: 1h30</Typography>
                                </div>

                            </ExpandableCard>

                            <ExpandableCard titulo="Semana 1" subtitulo="Palavras">
                                <Typography>50 palavras</Typography>
                            </ExpandableCard>
                        </div>

                        <div className="grid gap-6">
                            <Card>
                                <Typography variant="muted">Aprenda uma nova palavra</Typography>
                                <Typography variant="default">Palavra Aleatória</Typography>
                                <div className="flex justify-center pt-8">
                                    <button className="bg-primary h-10 w-full sm:w-40 rounded-sm cursor-pointer text-white font-semibold"
                                        onClick={() => setPopupIsOpen(!popupIsOpen)}>GERAR</button>
                                </div>
                            </Card>

                            <Card className="bg-[#CCE8E7] hover:cursor-pointer">
                                <div className="text-center">
                                    <Typography variant="title" className="text-xl sm:text-2xl">GIF</Typography>
                                </div>
                            </Card>
                        </div>

                    </div>
                </div>

                <div>
                    <PopUp isOpen={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
                        <div className="grid justify-center px-4">
                            <div className="my-4 grid gap-4 text-center mb-12 max-w-md">
                                <Typography variant="default" className="text-lg sm:text-xl">A palavra sorteada foi:</Typography>
                                <Typography variant="textSecondary" className="text-center text-2xl sm:text-3xl">Twice</Typography>
                                <Link to="https://v2.tailwindcss.com/docs/font-size" target="_blank"><Typography className="underline text-secondary">Ver significado</Typography></Link>
                            </div>
                            <div>
                            </div>
                        </div>

                    </PopUp>
                </div>



            </div>

        </>
    )



};