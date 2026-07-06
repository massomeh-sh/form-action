import {type JSX, useState} from 'react';
import DatePicker from "react-datepicker";
import {IoCalendarOutline} from "react-icons/io5";
import ErrorMessage from "./ErrorMessage.tsx";


interface BirthDateProps {
    errorMessage: string | undefined
}

function BirthDate({errorMessage}: BirthDateProps): JSX.Element {
    const [birthday, setBirthday] = useState<null | Date>(null);
    const maxBirthDate = new Date();
    maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 18);
    return (
        <div className="flex flex-col md:gap-1">
            <label htmlFor="birthday" className="text-xs md:text-sm font-semibold text-gray-700"
            >Birthdate</label>
<<<<<<< HEAD
            <div className="relative">
                <DatePicker name="birthday" id="birthday" selected={birthday}
                            onChange={(date: Date | null) => setBirthday(date)} placeholderText="Select your birthday"
                            dateFormat="dd/MM/yyy" showYearDropdown
=======
            <div className="grow relative">
                <DatePicker name="birthday" id="birthday" selected={birthday}
                            onChange={(date: Date | null) => setBirthday(date)} placeholderText="Select your birthday"
                            dateFormat="dd/MM/yyyy" showYearDropdown
>>>>>>> cbbee4b6b13e952ed21354b3e1541f485336a3ad
                            showMonthDropdown scrollableYearDropdown yearDropdownItemNumber={80}
                            maxDate={maxBirthDate}
                            wrapperClassName="w-full"
                            className="w-full outline-none px-2 py-1.5 text-[8px] md:text-[10px] border-2 border-gray-200 focus:border-gray-400 rounded-lg"

                />
<<<<<<< HEAD
                <IoCalendarOutline
                    className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 pointer-events-none"/>
=======
                <IoCalendarOutline className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 pointer-events-none"/>
>>>>>>> cbbee4b6b13e952ed21354b3e1541f485336a3ad
            </div>
            {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
        </div>
    );
}

export default BirthDate;