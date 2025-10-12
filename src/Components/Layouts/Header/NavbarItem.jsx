export default function NavbarItem({ LinkAddres, ListText, Svg}) {
    return (
        <>
            <a className='text-white flex items-center gap-2 hover:text-[#96F207]' href={LinkAddres}>{Svg} {ListText}</a>
        </>
    )
}
