import { create } from 'zustand'

type State = {
    open: boolean,
    setOpen: (open: boolean) => void,
}

const useSidebar = create<State>()(
    (set) => ({
        open: false,
        setOpen: (open) => set({ open }),
    })
);

export default useSidebar;
