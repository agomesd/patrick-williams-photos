import useHooks from "../hooks/useHooks";
import styles from "../styles/pages/About.module.css";

const About = () => {
  const {} = useHooks();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>About</h1>
        <p>
          Bacon ipsum dolor amet leberkas sirloin pork chop ribeye tenderloin,
          capicola chuck sausage prosciutto pancetta meatloaf kevin landjaeger
          andouille. Meatball bresaola ham hock rump cupim pig jerky chicken
          pork corned beef filet mignon brisket tenderloin cow. Bacon tongue
          pork belly, filet mignon ground round andouille jowl beef ribs. Ham
          hock kielbasa brisket, chislic shankle beef pork loin. Tri-tip beef
          ribs chuck prosciutto ribeye pork chop fatback ham filet mignon swine
          salami.
        </p>
        <p>
          Sausage turducken ham filet mignon, cow jerky pork belly spare ribs
          biltong pastrami tail fatback. Andouille pork belly turducken beef
          ribs, short ribs hamburger meatball ribeye fatback ground round
          landjaeger t-bone. Pork chop t-bone filet mignon picanha. Biltong beef
          meatball chislic tail, jowl chuck strip steak spare ribs. Landjaeger
          shoulder beef, prosciutto turducken hamburger pig turkey porchetta
          short ribs. Landjaeger strip steak kevin, chuck shoulder chicken
          hamburger frankfurter brisket chislic kielbasa buffalo turkey. Swine
          turducken biltong boudin, frankfurter brisket tail.
        </p>
      </div>
    </div>
  );
};

export default About;
