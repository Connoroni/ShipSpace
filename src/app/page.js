import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Image from "next/image";
export default function HomePage() {
    return (
        <>
        <Header />
        <Navigation />
        <div className="info">
            <h1>Title</h1>
            <p>some info</p>
        </div>
        </>
    );
}