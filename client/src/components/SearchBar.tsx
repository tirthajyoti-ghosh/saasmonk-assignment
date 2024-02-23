import { useState } from "react";

export default function SearchBar( {onChange}: {onChange: (value: string) => void} ) {
    const [search,setSearch] = useState('');
    
    return (
        <div className="flex items-center border-2 border-custom-blue rounded-sm px-3 py-2 w-[450px] mt-5 mb-5" data-testid="search-bar">
            <svg
                className="text-custom-grey3 mr-2"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                className="w-full bg-transparent outline-none focus:border-blue-700"
                type="text"
                placeholder="Search reviews..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setTimeout(() => onChange(search), 500);
                }}
            />
        </div>
    );
}
