import { FaAtlassian, FaAws, FaBattleNet, FaApple, FaAmazonPay, FaAirbnb } from "react-icons/fa";
import { PartnerItem, PartnerRow, PartnerSection, Partnertext, SericesSection } from "../../styledComponent/home";

const Partners = () => {
    return (
        <>
            <SericesSection>
                <PartnerSection>
                    <Partnertext>Trusted by 1000+ companies</Partnertext>
                    <PartnerRow>
                        <PartnerItem>
                            <FaAtlassian />
                        </PartnerItem>
                        <PartnerItem>
                            <FaAws />
                        </PartnerItem>
                        <PartnerItem>
                            <FaBattleNet />
                        </PartnerItem>
                        <PartnerItem>
                            <FaApple />
                        </PartnerItem>
                        <PartnerItem>
                            <FaAmazonPay />
                        </PartnerItem>
                    </PartnerRow>
                    {/* <FaAirbnb /> */}
                </PartnerSection>
            </SericesSection>
        </>
    )
}

export default Partners