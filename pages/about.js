import styles from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";
import useHooks from "../hooks/useHooks";

const About = () => {
  const { toggleShowContact } = useHooks();
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.head}>
          <Image
            className={styles.image}
            src="https://res.cloudinary.com/agomesd/image/upload/v1621954342/patrick-williams-photos/jeremy-vessey-header_yaj6lz.jpg"
            alt="Patric Williams"
            width={360}
            height={280}
          />
          <p className={styles.content}>
            Bacon ipsum dolor amet meatloaf filet mignon tail porchetta beef
            ribs shoulder t-bone ball tip shank doner ribeye fatback corned beef
            leberkas. Pork loin beef ribs salami pancetta jowl short loin.
            Biltong chuck buffalo capicola cupim, cow meatloaf doner pork. Ham
            rump shoulder t-bone. Buffalo t-bone venison ground round, turkey
            andouille porchetta ribeye pig meatloaf chicken capicola beef flank.
          </p>
        </div>
        <p className={styles.content}>
          Kevin sausage turkey, tongue cow picanha corned beef frankfurter
          porchetta buffalo pork loin ham hock swine. Shoulder bresaola
          tenderloin meatball ham, sirloin doner picanha t-bone landjaeger
          hamburger jerky tail sausage. Andouille sausage jowl biltong. Ham
          chislic kevin boudin, sausage ribeye cow pork chop brisket drumstick
          shoulder prosciutto turducken. Shankle venison jowl tenderloin swine,
          picanha kevin porchetta tri-tip. Chuck tri-tip landjaeger, pork chop
          pig tongue chislic shoulder corned beef jerky. T-bone tenderloin
          tri-tip short ribs hamburger pork ham hock pancetta ball tip.
        </p>
        <br />
        <p className={styles.content}>
          Alcatra pastrami andouille shankle, ham pork pancetta strip steak
          picanha spare ribs porchetta ground round pork loin. Burgdoggen
          bresaola swine alcatra landjaeger kielbasa prosciutto rump flank kevin
          filet mignon. Fatback bacon flank burgdoggen swine, bresaola brisket
          tongue pork belly meatball cow frankfurter capicola. Jowl beef pork
          loin chuck, burgdoggen filet mignon cow leberkas andouille shankle
          short ribs flank.
        </p>
      </div>
      <Link href="/contact">
        <a className={styles.link}>Get in Touch!</a>
      </Link>
    </div>
  );
};

export default About;
