import {ReactNode} from "react";
import {ButtonBackToMainRouteComponent} from "@/app/intermediary/ButtonBackToMainRouteComponent";
// Nesting layouts If you add layout.tsx you have to render children component
export default function TableLayout({children,}: { children: ReactNode }): JSX.Element {
    console.log('TableLayout render')
    // src/table/page.tsx render on here (src/table/layout.tsx) tru {children}
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-24">
            {children}
            <ButtonBackToMainRouteComponent/>
        </main>
    )
}