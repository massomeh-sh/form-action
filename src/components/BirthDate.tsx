import {type JSX, useState} from "react";
import DatePicker from "react-datepicker";
import {IoCalendarOutline} from "react-icons/io5";
import ErrorMessage from "./ErrorMessage.tsx";

interface BirthDateProps {
    errorMessage: string | undefined;
}

function BirthDate({errorMessage}: BirthDateProps): JSX.Element {
    const [birthday, setBirthday] = useState<Date | null>(null);

    const maxBirthDate = new Date();
    maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 18);

    return (
        <div className="flex flex-col md:gap-1">
            <label
                htmlFor="birthday"
                className="text-xs md:text-sm font-semibold text-gray-700"
            >
                Birthdate
            </label>

            <div className="grow relative">
                <DatePicker
                    name="birthday"
                    id="birthday"
                    selected={birthday}
                    onChange={(date: Date | null) => setBirthday(date)}
                    placeholderText="Select your birthday"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={80}
                    maxDate={maxBirthDate}
                    wrapperClassName="w-full"
                    className="w-full outline-none px-2 py-1.5 text-[8px] md:text-[10px] border-2 border-gray-200 focus:border-gray-400 rounded-lg"
                />

                <IoCalendarOutline
                    className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 pointer-events-none"/>
            </div>

            {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
        </div>
    );
}

export default BirthDate;