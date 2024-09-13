import { NavbarDetail } from "@/components/navbar/navbar-detail";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavbarDetail />
            {children}
        </>
    )
}