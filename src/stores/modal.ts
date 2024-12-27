import { create } from "zustand";

interface States {
  modalState: boolean;
}

interface Actions {
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<States & Actions>((set) => ({
  modalState: false,
  openModal: () => set(() => ({ modalState: true })),
  closeModal: () => set(() => ({ modalState: false })),
}));
