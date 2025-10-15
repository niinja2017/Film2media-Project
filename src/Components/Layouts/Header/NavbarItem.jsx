export default function NavbarItem({ LinkAddres, ListText, Svg, Element, style }) {
    return (
        <>
            <a className={`text-white flex items-center   ${style ?? ''}`} href={LinkAddres}> <span className="flex gap-2 hover:text-[#96F207]">{Svg} {ListText}</span>
                {Element}
            </a>
        </>
    )
}
