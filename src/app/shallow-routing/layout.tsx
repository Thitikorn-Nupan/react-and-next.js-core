import {ReactNode} from "react";
import {ButtonBackToMainRouteComponent} from "@/app/intermediary/ButtonBackToMainRouteComponent";

// Defines the common layout structure (header, footer, etc.) for pages. Nesting layouts If you add layout.tsx you have to render children component
export default function ShallowRoutingLayout({children,}: { children: ReactNode }) {
    console.log('ShallowRoutingLayout render')
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-24">
            {children}
            <ButtonBackToMainRouteComponent/>
        </main>
    )
}