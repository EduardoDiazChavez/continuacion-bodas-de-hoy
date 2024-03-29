import Link from "next/link"
import { Dispatch, FC, SetStateAction } from "react"
import ClickAwayListener from "react-click-away-listener"
import { SidebarContextProvider } from "../../context"
import { CarIcon as SettingsIcon } from "../Icons"
import ModalReclarEmpresa from '../ReclamarEmpresa/ModalReclamarEmpresa'
import { useState } from 'react'
import { ButtonClose2 } from '../../components/Inputs/ButtonClose2'
import { AuthContextProvider } from '../../context';
import { useRouter } from 'next/router';


type ItemNav = {
    title: string
    route: string
}

interface propsSidebar {
    set: Dispatch<SetStateAction<boolean>>
    state: boolean
}
// menu hamburguesa en el mobile 
export const Sidebar: FC<propsSidebar> = ({ set, state }) => {

    const [showForm, setShowForm] = useState(false)
    const { user } = AuthContextProvider()
    const router = useRouter()

    const FirstList: ItemNav[] = [
        { title: "Mi boda", route: process.env.NEXT_PUBLIC_EVENTSAPP ?? "" },
        { title: "Novia", route: "/categoria/novias" },
        { title: "Novio", route: "/categoria/novios" },
        { title: "Proveedores", route: "/categoria/proveedores" },
        { title: "Lugares para bodas", route: "/categoria/lugares-para-bodas" },
    ]

    const SecondaryList: ItemNav[] = [
        { title: "Magazine", route: "/magazine" },
        { title: "Gestor de invitados", route: process.env.NEXT_PUBLIC_EVENTSAPP ?? "" },
    ]

    const handleClick = async () => {
        const lowerCase = user?.role?.map((item: string) => item.toLowerCase())
        if (lowerCase?.includes("empresa")) {
            router.push("/empresa")
        } else {
            router.push("/info-empresa")
        }
    }
    return (<>

        {showForm ? (
            <ModalReclarEmpresa set={setShowForm} state={showForm} />
        ) : null}

        <ClickAwayListener onClickAway={() => state && set(false)}>
            <div className={`fixed bg-white shadow-lg z-40 h-screen w-80 transform transition top-0 left-0  ${state ? "translate-x-0" : "-translate-x-full"} `}>
                <div className="relative w-full h-full">
                    <div className="p-10">
                        <div className={` ${user ? " espaciado " : "flex justify-center items-center gap-36"}`}>
                            {(() => {
                                if (!user) {
                                    return (
                                        <span className="text-primary text-xl font-light pb-4">
                                            <Link href={"/login"} passHref>Accede </Link>
                                            {/* <span className="text-tertiary">o</span> Regístrate */}
                                        </span>
                                    )
                                } else {
                                    return (
                                        <span className="text-primary text-xl pb-4">
                                            {user.displayName}
                                        </span>
                                    )
                                }
                            })()}

                            <ButtonClose2 onClick={() => state && set(false)} />
                        </div>
                        <div className="border-b border-t">
                            <BlockButtons list={FirstList} />
                        </div>
                        <BlockButtons list={SecondaryList} />
                        <div onClick={handleClick} className={` text-tertiary border-t py-4 `}>
                            {(() => {
                                const lowerCase = user?.role?.map((item: string) => item.toLowerCase())
                                if (lowerCase?.includes("empresa")) {
                                    return (
                                        <span>Panel de empresa</span>
                                    )
                                } else {
                                    return (
                                        <span>Informacion para empresas</span>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                    <div className="border-t border-gray-100 py-4 w-full px-5 flex gap-2 items-center justify-start absolute bottom-0 right-0">
                        <SettingsIcon className="text-gray-200 w-5 h-5" />
                        <p className="text-gray-200">Configuración</p>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
        <style jsx>
            {
                `.espaciado{
                    display: flex;
                    justify-content: space-between;

                }
            `
            }
        </style>
    </>
    )
}


interface propsBlock {
    list: ItemNav[]
}
const BlockButtons: FC<propsBlock> = ({ list }) => {
    return (
        <div className="w-full py-4  border-base gap-2 flex flex-col">
            {list.map((item, idx) => (
                <Link key={idx} href={item.route} passHref>
                    <p className="text-tertiary">{item.title}</p>
                </Link>
            ))}
        </div>
    )
}

