const services = [
    {
        id: "seo",
        title: "Search engine",
        highlight: "optimization",
        variant: "light",
    },
    {
        id: "ppc",
        title: "Pay per click",
        highlight: "advertising",
        variant: "dark",
    },
    {
        id: "smm",
        title: "Social media",
        highlight: "marketing",
        variant: "dark",
    },
    {
        id: "email",
        title: "E-mail",
        highlight: "marketing",
        variant: "light",
    },
]

function Page2() {
    return (
        <section className="services-section" id="services">
            <div className="services-header">
                <h2>Services</h2>
                <p>
                    Strategic growth campaigns built for modern brands. From search visibility
                    to lifecycle retention, we blend creative with performance to keep your funnel full.
                </p>
            </div>
            <div className="services-grid mt-28">
                {services.map((service) => (
                    <article
                        key={service.id}
                        className={`service-card ${service.variant === "dark" ? "service-card--dark" : "service-card--light"}`}
                    >
                        <h3>
                            <span className="service-title-wrap">
                                {service.title}{" "}
                                <span className="service-title-mark">{service.highlight}</span>
                            </span>
                        </h3>
                        <p className="service-link">
                            <span className="service-link__icon">↗</span>
                            Learn more
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Page2