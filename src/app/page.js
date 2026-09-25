
import Banner from "@/components/share/homepage/Banner";
import WorkoutGrid from "@/components/share/homepage/WorkoutGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4">
      <Banner/> 
      <WorkoutGrid/>     
    </div>
  );
}
