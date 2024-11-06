import { Card } from "@/Components/Card";

export default function ServicesPage() {
  return (
    <div>
        <ServicesHeader />
        <div className="flex justify-around gap-4 m-10">
        <Card title="Solution Consulting" content="One-on-one consultant Solution suggestion Project Tracking" />
        <Card title="Technical Services" content="7 * 24h online service After-sales maintenance installation guide" />
        <Card title="Marketing Support" content="Marketing consultation Showroom guidance Promotion advertising" />
        
        </div>
    </div>
  );
}

function ServicesHeader() {
    return (
        <div className="flex justify-center mb-10 mt-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </div>
    )
}