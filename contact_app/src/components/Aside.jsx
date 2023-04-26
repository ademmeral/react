import { memo } from "react"
import { AsideFooter } from "./AsideFooter"
import AsideHeader from "./AsideHeader"
import People from "./People"

export let Aside = () => {
    return (
        <aside className="flex-col">
            <AsideHeader />
            <People />
            <AsideFooter />
        </aside>
    )
}
Aside = memo(Aside);