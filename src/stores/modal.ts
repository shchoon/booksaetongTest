import { create } from "zustand";
import { BookInfo } from "@/types/common";

interface States {
  isOpen: boolean;
  book: BookInfo | undefined;
}

interface Actions {
  openModal: (book: BookInfo) => void;
  closeModal: () => void;
}

export const useModalStore = create<States & Actions>((set) => ({
  isOpen: false,
  book: undefined,
  openModal: (book: BookInfo) => {
    set(() => ({ isOpen: true, book: book }));
  },
  closeModal: () => {
    set(() => ({ isOpen: false, book: undefined }));
  },
}));
