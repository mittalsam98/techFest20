import React from 'react'

import Classes from './About.module.css';
import SlietImg from '../../assests/SlietAccad.png'

export default function About() {
  return (
    <div className={Classes.about}>
      <div className={Classes.container}>
        <div className={Classes.about_sliet}>
          <h1 className={Classes.heading}>
            About SLIET
          </h1>
          <div className={Classes.SlietImg}>
            <img src={SlietImg} alt="SLIET" />
          </div>
          <div className={Classes.content}>
            <p className={Classes.text}>
              Welcome to Sant Longowal Institute of Engineering and Technology (SLIET). Spread over 451 acres of land
              bestowed by the MHRD, SLIET never disappoints and excels in uplifting the standards of technical
              education at a national level. The students are always dynamic and enthusiastic in participating in
              competitions all over India. The technical teams of SLIET encourage students to compete and develop
              their expertise in the practical field of technology.Apart from academics, SLIET supports all sorts of
              co-curricular activities ranging from various sports like basketball, lawn tennis etc. to hobbies like
              modelling, dance, music etc. Life at SLIET is always enthusiastic. The students here also participate in
              national level sports competitions held in prestigious institutions. SLIET’s technical teams have also
              received many awards for winning competitions like the efficycle, events in “Avishkar” at MNIT Allahabad
              etc.
          </p>
            <p className={Classes.text}>
              SLIET never falls back and stays up-to-date in the trends of modern technology by organizing seminars by
              experts from various recognized institutes under TEQIP-III. SLIET has been recognized and has been
              running as an autonomous body since 2006. It awards its own Diplomas, Undergraduate and Postgraduate
              certificates in various streams all approved and recognized by the AICTE. SLIET has always supported
              innovative ideas of students and continues to encourage students to take up research and development
              projects. No one is left behind.
              SLIET actively promotes entrepreneurship activities too. The faculty at SLIET comprise of professors who
              are actively indulged in research and eagerly encourage students to be swamped with activities that will
              develop their young minds and pique their interests. The campus boasts a calm and serene environment
              filled with lush green trees presenting a spectacle of harmony and natural beauty. SLIET gives the
              comfort of home, thanks to the profound amenities provided inside the campus for fulfilling the
              necessities of students.
          </p>
          </div>
        </div>

        <div className={Classes.about_techfest}>
          <h1 className={Classes.heading}>
            About techFEST'20
        </h1>
          <div>
            <p className={Classes.text}>
              Ahoy mates! Hop on as we set sail into the future with techFEST’19. Fire up those innovative ideas and
              bring about the revolution in cycle design. SLIET presents techFEST’19, a humble abode to all those
              engineers who want to stand out and create something new. We invite you to explore endless possibilities
              in modern technology and science. techFEST’19 provides a broad platform to students to showcase their
              technical skills and innovative ideas. Dull and desolate are something these two days won’t be. Witness
              the dawn of a new age right here at SLIET. Compete not to win but to learn. It doesn’t stop there.
              Experience a festival born out of technology. Celebrate science and engineer new solutions to some
              interesting problems. It is time science and technology fuse together. Welcome to techFEST’19, a cluster
              of challenges and the ultimate combination of puzzles to be solved.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
