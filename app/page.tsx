import {
  Button,
  Card,
  Footer,
  Header,
  Section,
  SponsorMarquee,
  WireframeImage,
} from "./components/site";
import DonationSection from "./components/donation-section";

const dashboardUrl = "https://dmvrin-dashboards.vercel.app/";
const classInterestUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdMd8KVYsiRM3hEtPA4o8POO3Hsetdlp4K9-8F455L-WtmsPg/viewform?usp=dialog";

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
                <Button href={classInterestUrl}>Join the class interest list</Button>
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
          <p>We are a student-led watershed organization making local river data clear for DMV residents. We also provide educational resources and opportunities for the community, especially for young minds.</p>
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
                These dashboards, which are run by student chapters, provide clear and
                accessible information about local rivers, including water quality and flood rates.
                They are also comparable to past data, allowing users to track changes over time
                get a better understanding of the health of their local rivers.
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
                The goal of these classes is to educate the community about local rivers,
                spanning topics from water quality to AI / ML applications in river data analysis.
                <br />
                Our pioneer class, <b>Code the River Labs</b> teaches students how to use statistics and data analytics to form a scientific question
                and develop a comprehensive research project.
              </p>
              <Button href={classInterestUrl}>Join Code the River Labs's Interest List</Button>
            </Card>
          </div>
        </Section>

        <Section id="dashboards">
          <h2>Chapter dashboards</h2>
          <p>
            Chapters are ran by students and independently verified by our organization.
            Each chapter dashboard is focused on a specific river segment, prioritizing information
            that those specific residents would find most useful.
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
                Founded by <b>Ackshat Tiwari</b>, this chapter focuses on the Potomac River near Little Falls.
              </p>
              <Button href="#">View chapter page</Button>
            </Card>

          </div>
        </Section>

        <Section id="classes" className="classes-section">
          <div className="two aligned-grid">
            <WireframeImage
              alt="Code the River Labs course flyer"
              height={3}
              label="Code the River Labs course flyer"
              src="/CodeTheRiverLabs_flyer.png"
              width={2}
            />
            <div>
              <h2>River classes</h2>
              <p>DMV River Intelligence Network's classes are designed to educate and empower students to become leaders in the field of river conservation and data analysis.</p>
              <p>
                Code the River Labs is our pioneer class, teaching students how to use statistics and data analytics to form a scientific question and develop a comprehensive research project.
              </p>
              <p>
                <strong>This is an interest list.</strong> Classes are not open
                for enrollment yet. [ Placeholder: what happens after signing
                up. ]
              </p>
              <Button href={classInterestUrl}>Join Code the River Labs's Interest List</Button>
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
                Ackshat Tiwari is a sophomore at Rock Rideg High School, and the founder of DMV River Intelligence Network.
                He experienced the challenges of accessible river data firsthand while participating in a local program where
                he learned about water quality monitoring. This inspired him to create this organization.
              </p>
            </div>
          </div>
        </Section>

        <DonationSection />

        <Section id="lead" className="cta-section">
          <h2>Lead a chapter dashboard</h2>
          <p>
            We are looking for students to lead chapter dashboards. You get volunteer hours depending on the amount of work,
            and you will be featured on our website and social media fro your efforts. Applications are decided on a rolling basis.
          </p>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdFtdKmVT25GAiPFtvf1vnVMfYiEcWQybVUBURLLkGX7DV9UA/viewform?usp=dialog">Apply to lead a chapter</Button>
        </Section>
      </main>

      <Footer />
    </>
  );
}
