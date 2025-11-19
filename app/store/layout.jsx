import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Gocycle. - Store Dashboard",
    description: "Gocycle. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
