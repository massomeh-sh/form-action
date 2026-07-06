import {type JSX, useState} from 'react';
import {useLoginContext} from "../store/useLoginContext.ts";
import {GrFormPrevious} from "react-icons/gr";
import {GrFormNext} from "react-icons/gr";
import UserRow from "./UserRow.tsx";
import type {User} from "../types/loginTypes.ts";
import Spinner from "./Spinner.tsx";


function UserList(): JSX.Element {
    const {loginsData} = useLoginContext();
    const [currentPage, setCurrentPage] = useState(1);

    console.log(loginsData.users);

    const usersPerPage = 5;
    const lastIndex = currentPage * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;
    const currentPageUsers: User[] = loginsData.users.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(loginsData.users.length / usersPerPage);

    function getPagination(
        currentPage: number,
        totalPages: number
    ): (number | string)[] {

        const pagination: (number | string)[] = [];

        if (totalPages <= 5) {
            pagination.push(
                ...Array.from(
                    {length: totalPages},
                    (_, i) => i + 1
                )
            );
            return pagination;
        }

        if (currentPage <= 3) {
            for (let i = 1; i <= 3; i++) {
                pagination.push(i)
            }
            pagination.push("...");
            pagination.push(totalPages);
            return pagination;
        }

        if (currentPage > 3 && currentPage < totalPages - 2) {
            pagination.push(1);
            pagination.push("...");
            pagination.push(currentPage - 1);
            pagination.push(currentPage);
            pagination.push(currentPage + 1);
            pagination.push("...");
            pagination.push(totalPages);
            return pagination;
        }

        if (currentPage >= totalPages - 2) {
            pagination.push(1);
            pagination.push("...");
            pagination.push(totalPages - 2);
            pagination.push(totalPages - 1);
            pagination.push(totalPages);

            return pagination;
        }

        return pagination;
    }

    const pagination = getPagination(currentPage, totalPages);

    return (
        <>
            {loginsData.isLoading && <Spinner/>}
            {loginsData.users.length > 0 &&
                <div className="bg-white px-3 py-4 md:p-6 rounded-lg shadow-sm flex flex-col gap-2 text-[8px] md:text-[10px]">
                    <div className="flex justify-between">
                        <h2 className="text-xs md:text-sm font-bold">Users</h2>
                        <p className="text-gray-400">Showing {loginsData.users.length} users</p>
                    </div>
                    <table className="w-full border-collapse">
                        {currentPageUsers.map((user, userIndex) => (
                            <UserRow key={user.id} userData={user} userNumber={firstIndex + userIndex + 1}/>))}
                    </table>
                    <div className="flex items-center">
                        <p className=" text-gray-400">{`Page ${currentPage} of ${totalPages}`}</p>
                        <div className="flex gap-0.5 ml-auto">
                            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}
                                    className="cursor-pointer text-gray-400 px-2 py-1 border border-gray-100 rounded-lg hover:bg-blue-50">
                                <GrFormPrevious/>
                            </button>
                            {pagination.map((page: string | number, index) => {
                                if (typeof page === "string") {
                                    return <span key={`ellipsis-${index}`}>...</span>
                                }
                                return (
                                    <button key={page} disabled={currentPage === page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`cursor-pointer border border-gray-100 rounded-lg px-3 py-1 hover:bg-blue-50 hover:text-black ${currentPage === page ? "bg-blue-600 text-white" : ""}`}>{page}</button>
                                )
                            })}
                            <button disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="cursor-pointer text-gray-400 px-2 py-1 border border-gray-100 rounded-lg hover:bg-blue-50">
                                <GrFormNext/>
                            </button>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default UserList;