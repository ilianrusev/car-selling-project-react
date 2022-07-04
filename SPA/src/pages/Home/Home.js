import BodyCategoriesSection from "../../components/BodyCategories/BodyCategoriesSection"
import LatestOffersSection from "../../components/LatestOffersSection/LatestOffersSection"
import SearchSection from "../../components/SearchSectionHome/SearchSection"
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