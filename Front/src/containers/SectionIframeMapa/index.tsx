import { SectionContainer } from "./styles"
import { Wrapper } from "./styles"

const SectionIframeMapa = () => {
    return(
        <SectionContainer>
            <Wrapper>
                <iframe src="https://www.google.com/maps/d/embed?mid=1rVJ0irX_V2cInE_bAIRGA80DFOlBpNM&ehbc=2E312F" width="640" height="480"></iframe>
            </Wrapper>
        </SectionContainer>
    )
}

export default SectionIframeMapa