

export default function InputFormLogin({ InputType, TitleLabel, styleWidth , initialValue}) {
    const inputId = `input-${TitleLabel}`


    return (
        <div className={`relative ${styleWidth}`}>
            <input
                {...initialValue}
                id={inputId}
                type={InputType}
                placeholder="  "
                className="peer w-full p-5 border rounded-xl bg-[#0D0D0D] border-[#484848] focus:border-[#96f207] focus:shadow focus:shadow-[#96f207] text-white focus:outline-none"
            />
            <label
                htmlFor={inputId}
                className="absolute cursor-text right-5 top-1 text-sm text-[#9f9f9f] transition-all duration-200
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#9f9f9f]"
            >{TitleLabel}</label>
        </div>
    )
}
