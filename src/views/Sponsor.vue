<template>
  <div id="sponsor-page">
    <div class="sponsor-paragraphs">
      <div class="sponsor-thanks">
        <h1>Our Sponsors</h1>

        <p>
          We are always very thankful for our sponsors.
          MegaMinerAI would not be possible without them.
          Their generous donations help us host our competitions
          as well as develop our games and framework.
        </p>

        <p><em>From all of us, <strong>thank you</strong>!</em></p>
      </div>

      <div class="support-info">
        <h1>How to Support Us</h1>
        <p>
          If your company is interested in reaching out to our members
          and other MegaMinerAI participants,
          please feel free to download our Sponsor Packet below.
          If you are simply interested in contributing,
          we have a donation link, which is also below.
        </p>
      </div>
    </div>

    <TheButton
      text="Sponsor Packet"
      class="sponsor-button"
      @click="downloadSponsorPacket()"
    />
    <TheButton
      text="Donate"
      class="sponsor-button"
      @click="redirectDonate()"
    />

    <div class="sponsor-list">
      <SponsorBlock
        v-for="(sponsor, index) of sponsors"
        :key="index"
        :name="sponsor.name"
        :logo="sponsor.logo"
        :info="sponsor.info"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SponsorBlock from '@/components/SponsorBlock.vue';
import TheButton from '@/components/TheButton.vue';

export default Vue.extend({
  name: 'SponsorPage',
  components: {
    SponsorBlock,
    TheButton,
  },
  data() {
    return {
      sponsors: [
        { name: 'Garmin', logo: 'garmin.jpg', info: 'To be an enduring company by creating superior products for automotive, aviation, marine, outdoor, and sports that are an essential part of our customers’ lives. ' },
        { name: 'Farmin', logo: 'logo.png', info: 'This company rocks!' },
        { name: 'Charmin', logo: 'logo.png', info: 'Woah!!!!!' },
      ],
    };
  },
  methods: {
    downloadSponsorPacket() {
      // temp alert
      // eslint-disable-next-line no-alert
      alert('TODO: download');
    },
    redirectDonate() {
      // temp alert
      // eslint-disable-next-line no-alert
      alert('DONATE');
    },
  },
});
</script>

<style scoped>
#sponsor-page {

}

.sponsor-button {
  margin: 20px;
}

.sponsor-paragraphs {
  width: 50%;
  margin: auto;
}

.sponsor-thanks {

}

.support-info {

}

.sponsor-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
