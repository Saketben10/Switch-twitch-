"use client";
import qs from "query-string";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [value, setValue] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="search here "
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          onClick={handleClear}
          className="absolute top-2.5 right-14 h-4 w-5 tetx-muted-foreground cursor-pointer hover:opacity-75 transition"
        />
      )}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};
