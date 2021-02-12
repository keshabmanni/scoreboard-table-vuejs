<template>
  <div class="container">
    <h1>All Teams</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div>
      {{ teams }}
      <div
        class="team"
        v-for="(team, index) in teams"
        v-bind:item="team"
        v-bind:index="index"
        v-bind:key="team.team_name"
      >
        <p>
          {{ team.team_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

//const url = 'http://localhost:5000/api/teams';
export default {
  name: "TeamsComponent",
  data() {
    return {
      teams: [],
      error: "",
      text: "",
    };
  },
  mounted() {
    try {
      fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json').then(function(resp) {
        //const data = resp.data;
        resp.json().then((tms) => {
          console.log(tms)
        tms.forEach((team) => {
          const dat = {
            team_name: team.team_name,
            wins: team.wins,
            loses: team.loses,
            ties: team.ties,
            score: team.score
          };
          
          this.teams.push(dat);
        });
      });
      
      });
      
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
