export default function FooterItem({style , message , textStyle , svg}) {
    return (
        <div className={` ${style}`}>
            {svg}
            <p className={`${textStyle}`}>{message}</p>
        </div>
    )
}
