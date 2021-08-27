<template>
  <div id="about-page">
    <GenericJumbotron
      image="games.gif"
      attachment="fixed"
      style="width: 100%; height: 500px;"
    >
      <div class="about-header">
        <div class="header-container">
          <h1>
            WHO WE ARE
          </h1>
        </div>
      </div>
    </GenericJumbotron>

    <div class="about-text">
      <h2>OUR STORY</h2>
      <p>
        Founded in Fall 2007, ACM Game was a small group of gung-ho Missouri S&T students
        with one goal: to create a programming competition designed to test one's ability
        to design and implement an artificially intelligent player of a novel game.
        Over the years, the ACM Game development team designed increasingly fun, complex,
        and successful games, allowing students of all skill levels to compete to design the best AI
        player in a tournament known as MegaMinerAI. Today, ACM Game has grown to require
        multiple teams, each specializing in a different aspect of MegaMinerAI.
        Current members can expect to learn game theory, databases, visualization,
        public relations, web design, and more.
      </p>
    </div>

    <div class="about-teams">
      <h2>OUR TEAMS</h2>
      <TeamBlock
        v-for="(team, index) of teams"
        :key="index"
        :team="team"
        style="width: 75%; height: 400px; margin-bottom: 20px;"
      />
    </div>

    <div class="about-text">
      <h2>OPEN SOURCE</h2>
      <p>
        In addition to developing novel games for MegaMinerAI, the ACM-Game Development
        team develops and maintains a framework to host MegaMinerAI and other programming
        competitions. Though game details are kept secret until competition day, our framework
        is opensource and available on GitHub. As our competition attendance has grown to record
        levels, the ACM-Game Developers have begun a redesign of the competition framework is
        open source and available on <a
          href="https://github.com/siggame"
          target="_blank"
        >our GitHub</a>.
      </p>
    </div>

    <div>
      <h2>CONTACT US</h2>
      <div class="contact-list">
        <ContactInfo
          v-for="(contact, index) of contacts"
          :key="index"
          :contact="contact"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GenericJumbotron from '@/components/GenericJumbotron.vue';
import TeamBlock from '@/components/TeamBlock.vue';
import ContactInfo from '@/components/ContactInfo.vue';

export default Vue.extend({
  name: 'AboutPage',
  components: {
    GenericJumbotron,
    TeamBlock,
    ContactInfo,
  },
  data() {
    return {
      teams: [
        {
          name: 'Arena',
          logo: 'arena.png',
          image: 'arena.png',
          description: 'This group is how MMAI happens. It is responsible for holding the actual competition and putting competitors against each other. This team gets experience in: ',
        },
        {
          name: 'Game',
          logo: 'game.png',
          image: 'server.png',
          description: 'This group makes the actual game to be played. They are responsible for designing the game, programming it, and making the rules/documentation for the game. This team gets experience in:',
        },
        {
          name: 'Public Relations',
          logo: 'pr.png',
          image: 'publicity.png',
          description: 'This group is responsible for making sure people know about ACM-Game. They also work with sponsors, create advertisements, and more. This group gets experience in: ',
        },
        {
          name: 'Visualizer',
          logo: 'visualizer.png',
          image: 'visualizer.png',
          description: 'This group is responsible for making the actual engine for the game (the thing that the player would see). Making the art for the game as well as the engine work are normally their tasks. This group gets experience in: ',
        },
        {
          name: 'Web',
          logo: 'web.png',
          image: 'web.png',
          description: 'This group runs the main website (like the one you are on now) as well as the MMAI one. They are responsible for designing the website, programming it, upkeeping the website, etc. This team gets experience in:',
        },
      ],
      contacts: [
        {
          name: 'ACM Game',
          role: 'Organization',
          socials: {
            email: 'siggame@gmail.com',
          },
        },
        {
          name: 'Drew Brissette',
          role: 'Chair',
          socials: {
            email: 'adb5cw@umsystem.edu',
          },
        },
        {
          name: 'Jonathan Henderson',
          role: 'Vice Chair, Arena Lead',
          socials: {
            email: 'jkhd67@umsystem.edu',
            github: 'Jawbone999',
            linkedin: 'jonathanhenderson999',
            steam: 'id/TheJaw',
            website: 'https://jawbone999.github.io',
          },
        },
        {
          name: 'Dr. Angel Morales',
          role: 'Faculty Advisor',
          socials: {
            email: 'ricardom@umsystem.edu',
          },
        },
        {
          name: 'Matt Barton',
          role: 'Game Lead',
          socials: {
            email: 'mbzzd@umsystem.edu',
          },
        },
        {
          name: 'Bryce Foster',
          role: 'PR Lead',
          socials: {
            email: 'bnfghq@umsystem.edu',
          },
        },
        {
          name: 'Jordan Styer',
          role: 'Secretary',
          socials: {
            email: 'jbsxqg@umsystem.edu',
          },
        },
        {
          name: 'Leo Flaker',
          role: 'Visualizer Lead I',
          socials: {
            email: 'lafcz3@umsystem.edu',
          },
        },
        {
          name: 'Anthony Truong',
          role: 'Visualizer Lead II',
          socials: {
            email: 'atrm3@umsystem.edu',
          },
        },
        {
          name: 'Nicholas Latinette',
          role: 'Web Lead',
          socials: {
            email: 'nalrnw@umsystem.edu',
          },
        },
      ],
    };
  },
});
</script>

<style scoped>
#about-page {

}

.about-header {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
}

.header-container {
  height: 100%;
  width: 100%;
}

.header-container::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url('../assets/wrench.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 20%;
  opacity: 25%;
}

.header-container h1 {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  color: black;
  margin: 0;
}

.about-text {
  width: 75%;
  margin: auto;
}

.about-text p {
  text-align: justify;
  text-justify: inter-word;
}

.contact-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.contact-list div {
  margin: 20px;
}

</style>
