import { useStore } from "../customHooks/useStore"

export const DisplayValue = ({ item }) => (
    <div>
        {item}: {useStore((state) => state[item])}
    </div>
)