import Amazon from "../assets/Amazon.png"
import Netflix from "../assets/Netflix.png"
import Dribble from "../assets/Dribble.png"
import Hubspot from "../assets/Hubspot.png"
import Paypal from "../assets/Paypal.png"
import Zoom from "../assets/Zoom.png"

const logos = [
    { src: Amazon, alt: "Amazon" },
    { src: Netflix, alt: "Netflix" },
    { src: Dribble, alt: "Dribbble" },
    { src: Hubspot, alt: "HubSpot" },
    { src: Paypal, alt: "PayPal" },
    { src: Zoom, alt: "Zoom" },
]

function Brands() {
    return (
        <section className="brands-row mt-28">
            {logos.map((logo) => (
                <img
                    key={logo.alt}
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    className="brand-logo"
                />
            ))}
        </section>
    )
}

export default Brands