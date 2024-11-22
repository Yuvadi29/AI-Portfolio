import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch(query);
        }
    };

    return (
        <div className="flex items-center space-x-3 shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
            <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="flex-1"
            />
            <Button
                onClick={handleSearch}
                variant="secondary"
                className="bg-transparent border hover:bg-black/45 dark:text-white"
            >
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
