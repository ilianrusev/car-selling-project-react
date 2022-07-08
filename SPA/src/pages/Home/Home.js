import BodyCategoriesSection from "../../components/BodyCategories/BodyCategoriesSection/BodyCategoriesSection"
import LatestOffersSection from "../../components/LatestOffersSection/LatestOffersSection"
import SearchSection from "../../components/SearchSectionHome/SearchSection/SearchSection"
import MainPageLayout from "../MainPageLayout/MainPageLayout"


const Home = () => {
    return (
        <MainPageLayout>
            <SearchSection />
            <BodyCategoriesSection />
            <LatestOffersSection />
        </MainPageLayout>
    )
}

export default Home