import {LuUser} from "react-icons/lu";


async function Dropdown({active, onSelect}) {
    const session = ""
    return (
        <div>
            {session?.user?.name &&
                <button onClick={() => onSelect(!active)}
                        className={`w-8 h-8  relative flex text-primary-20 text-xl justify-center items-center rounded-full
                  ${active && "bg-primary-9 text-primary-7"}`}>
                    <LuUser/>
                </button>}
            {active && <div className="absolute  top-[40px]  w-[254px] right-0 bg-primary-20 opacity-[0.4] text-primary-7
                  text-xs  p-5 rounded-md text-center">
                1
            </div>
            }
        </div>
    );
}

export default Dropdown;