import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchIcon size={26} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent className="bg-black w-4/5 max-md:rounded-md">
        <VisuallyHidden>
          <DialogTitle>Search For Products</DialogTitle>
        </VisuallyHidden>
        <form>
          <input
            type="text"
            placeholder="Search here ..."
            className="block w-full bg-gray-300 rounded-lg px-5 py-2 mt-2 text-black"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
