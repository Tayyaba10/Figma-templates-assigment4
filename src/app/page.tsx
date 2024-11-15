
import FeaturedWorks from "@/components/feature";
import FeatureWork from "@/components/featureWork";
import Hero from "@/components/hero";
import RecentPost from "@/components/recentPost";

export default function Home(){
    return (
        <div >
           <Hero/>
           <RecentPost/> 
           {/* <FeatureWork/>  */}
           <FeaturedWorks/> 
        </div>
    )
}