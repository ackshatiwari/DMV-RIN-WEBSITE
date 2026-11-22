import {
  Button,
  Card,
  Footer,
  Header,
  Section,
  SponsorMarquee,
  WireframeImage,
} from "./components/site";

const dashboardUrl = "https://dmv-river-intelligence-network.vercel.app";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Section className="hero-section">
          <div className="hero">
            <div>
              <h1>River data you can actually read.</h1>
              <p className="lede">
                A student led watershed organization making local river data
                clear for DMV residents.
              </p>
              <div className="actions">
                <Button href={dashboardUrl}>Open dashboards</Button>
                <Button href="#classes">Join the class interest list</Button>
              </div>
            </div>
            <WireframeImage
              alt="Hero image placeholder"
              height={3}
              label="[ Hero image ]"
              src="/hero_image.jpeg"
              width={4}
              className="hero-image"
            />
          </div>
        </Section>

        <SponsorMarquee />

        <Section>
          <h2>What we do</h2>
          <p>[ One sentence: DMV RIN does two things. ]</p>
          <div className="two offering-grid">
            <Card>
              <WireframeImage
                alt="River dashboards image placeholder"
                height={9}
                label="[ Image ]"
                src="/dashboard.png"
                width={16}
              />
              <h3>River dashboards</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button href="#dashboards">See the dashboards</Button>
            </Card>
            <Card>
              <WireframeImage
                alt="River classes image placeholder"
                height={9}
                label="[ Image ]"
                src="/classes.png"
                width={16}
              />
              <h3>River classes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button href="#classes">Join the interest list</Button>
            </Card>
          </div>
        </Section>

        <Section id="dashboards">
          <h2>Chapter dashboards</h2>
          <p>
            [ One or two sentences: each river gets its own dashboard, run by a
            student chapter. ]
          </p>
          <div className="grid3">
            <Card>
              <WireframeImage
                alt="Dashboard preview placeholder"
                height={9}
                label="[ Dashboard preview ]"
                src="/pot_r_little_falls.png"
                width={16}
              />
              <h3>Potomac River near Little Falls</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button href="#">View chapter page</Button>
            </Card>
            <Card className="dashed">
              <h3>Your river here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button href="#lead">Lead a chapter</Button>
            </Card>
          </div>
        </Section>

        <Section id="classes" className="classes-section">
          <div className="two aligned-grid">
            <WireframeImage
              alt="Class or workshop photo placeholder"
              height={3}
              label="[ Photo: class or workshop ]"
              width={4}
            />
            <div>
              <h2>River classes</h2>
              <p>[ Short description of the classes and who they are for. ]</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <strong>This is an interest list.</strong> Classes are not open
                for enrollment yet. [ Placeholder: what happens after signing
                up. ]
              </p>
              <Button href="#">Join the interest list</Button>
            </div>
          </div>
        </Section>

        <Section>
          <h2>Our community</h2>
          <div className="stats">
            <div className="stat">
              <strong>5+</strong>
              active dashboard users
            </div>
            <div className="stat">
              <strong>200+</strong>
              Instagram followers
            </div>
          </div>
        </Section>

        <Section id="about">
          <h2>About us</h2>
          <div className="founder">
            <WireframeImage
              alt="Founder photo placeholder"
              height={1}
              label="[ Founder photo ]"
              src="/Ackshat_Tiwari.png"
              width={1}
            />
            <div>
              <h3>Ackshat Tiwari, Founder</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Section>

        <Section id="lead" className="cta-section">
          <h2>Lead a chapter dashboard</h2>
          <p>
            [ One sentence inviting students to apply. Applications are
            reviewed on a rolling basis. ]
          </p>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdFtdKmVT25GAiPFtvf1vnVMfYiEcWQybVUBURLLkGX7DV9UA/viewform?usp=dialog">Apply to lead a chapter</Button>
        </Section>
      </main>

      <Footer />
    </>
  );
}
