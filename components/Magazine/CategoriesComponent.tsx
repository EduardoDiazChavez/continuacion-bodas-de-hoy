import { FC, ReactNode } from "react"
import { CameraIcon, CarIcon, CrossIcon, DressIcon } from "../icons"
import Link from 'next/link'
import useHover from "../../hooks/useHover"

type Category = {
    title: string,
    icon : ReactNode,
    route : string

}

const CategoriesComponent : FC = () => {
    const Categories : Category[] = [
        {title: "Antes de la boda", icon: <CameraIcon className="w-12 h-12" />, route: "/"},
        {title: "Ceremonia", icon: <CarIcon className="w-full h-auto"  />, route: "/"},
        {title: "Banquete", icon: <CrossIcon />, route: "/"},
        {title: "Moda Nupcial", icon: <DressIcon className="w-12 h-12 text-tertiary" />, route: "/"},
        {title: "Luna de Miel", icon: <CrossIcon />, route: "/"},
        {title: "Actualidad", icon: <CrossIcon />, route: "/"},
    ]
    return (
        <div className="bg-white w-full py-10">
        <div className="max-w-screen-lg mx-auto inset-x-0 grid gap-6 ">
          <h2 className="uppercase text-tertiary text-lg text-center font-semibold tracking-widest w-full ">
            Articulos según temas
          </h2>
          <div className="grid grid-cols-3 gap-8 place-items-center">
            {Categories.map((item, idx) => (
                <CategoryItem key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default CategoriesComponent


interface propsCategoryItem {
    data: Category
}
const CategoryItem : FC <propsCategoryItem> = ({data}) => {
    const {title, icon, route} = data
    const [HoverRef, isHovered] = useHover()
    return (
        <Link href={route}>
        <div ref={HoverRef} className="text-tertiary flex flex-col gap-2 items-center justify-center cursor-pointer ">
            <span className={`p-3 rounded-full ${isHovered ? "bg-gray-100" : ""} transition w-20 h-20 grid place-items-center`}>{icon}</span>
            <p className="text-xs">{title}</p>
        </div>
        </Link>
    )
}


