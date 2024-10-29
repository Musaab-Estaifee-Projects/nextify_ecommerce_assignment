import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";

const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchIcon size={24} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle>Search For Products</DialogTitle>
        </DialogHeader>
        <form>
          <input
            type="text"
            placeholder="Search here ..."
            className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-2"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
