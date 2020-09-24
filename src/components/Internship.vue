<template>
  <v-container class="pa-16 pt-0  secondary--text">
    <v-row class="ma-10" justify="center">
      <div class="text-h4">Internships</div>
    </v-row>
    <v-timeline class="mt-10 mx-16" reverse>
      <v-timeline-item
        lg="4"
        v-for="(internship, i) in internships"
        :key="i"
        :left="i%2 ? true: false"
        color="primary"
        fill-dot
      >
        <span slot="opposite" class="text-h6 primary--text">{{ internship.time }}</span>
        <v-card color="primary" outlined rounded="lg">
          <v-card
            class="pa-2 pb-5"
            rounded="t-lg b-0"
            outlined
          >
            <v-card-title class="secondary--text">
              <span class="text-h6 mr-1">{{ internship.companyName }}</span>
              <v-btn :href="internship.companyLink" target="_blank" color="secondary" icon>
                <v-icon small>mdi-open-in-new</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle class="text-body-2">{{ internship.position  }}</v-card-subtitle>
            <v-list>
              <v-list-item
                v-for="(wo, j) in internship.workOverview"
                :key="j"
              >
                <v-list-item-content class="secondary--text text-body-2">
                  {{ wo }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card
            class="pa-2"
            rounded="b-lg t-0"
            border
            outlined
          >
            <v-card-title class="secondary--text text-body-1">
              Tech Stack
            </v-card-title>
            <v-list>
              <v-list-item
                v-for="(progLang, j) in internship.techStack"
                :key="j"
              >
                <v-list-item-content class="secondary--text text-body-2">
                  {{ progLang }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    name: 'Internship',

    data: () => ({
      internships: [
        {
          companyName: "Shiftboard",
          companyLink: "https://www.shiftboard.com/employee-scheduling-software/schedulepro/",
          time: "May 2020 - current",
          position: "Software Developer",
          workDescription: "Implemented and tested backend APIs for SchedulePro's mobile application. Developed both frontend and backend features for the SchedulePro Web Application",
          workOverview: [
            "Implemented and tested new features in the SchedulePro application",
            "Involved in design, planning and development of a new Android and IOS mobile application",
            "Implemented new APIs to allow the mobile app to get and update data from the SchedulePro database",
            "Built a new Push Notifications microservice which will enable the mobile app to receive notifications from the backend system",
            "Participated in code reviews and bug fixes"
          ],
          techStack: ["C#", "AngularJs", "Azure SQL Database"]
        },
        {
          companyName: "Plantiga",
          companyLink: "https://plantiga.com/",
          time: "Sep 2019 - Dec 2019",
          position: "Software Developer",
          workDescription: "Developed a new Analytics web application in ReactJs/ReactHooks showing the trend of each user's performance. Implemented, tested and deployed Google Cloud functions using Python to modify and query Firebase data",
          workOverview: [
            "Developed a new Analytics web application showing the trend of each user's performance",
            "Implemented, tested and deployed Google Cloud functions to modify and query Firebase data",
            "Developed backend features and APIs",
            "Knowledge of CI/CD and web infrastructure improvements  "
          ],
          techStack: ["Python3 (Flask framework)", "ReactJs/ReactHooks", "Firebase", "Terraform"]
        },
        {
          companyName: "Empire Life Insurance",
          companyLink: "https://www.empire.ca/",
          time: "Jan 2019 - Jan 2019",
          position: "Fullstack Developer",
          workDescription: "sum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut ",
          workOverview: [
            "Developed a new Chatbot to automate customer service by answering commonly asked questions",
            "Integrated Google Dialogflow to allow the Chatbot to talk to users in a conversational manner",
            "Integrated Zendesk to facilitate bot to human transfer",
            "Developed a Knowledge Base site for Customer Service Representatives along with authentication to allow CSR only access to the application",
            "Implemented a service to proxy messages to and from Google chat rooms and support agents"
          ],
          techStack: ["NodeJs", "ReactJs", "Google Dialogflow", "Google Chat API"]
        }
      ] 
    }),
  }
</script>

<style lang="scss" scoped>

#container {
  position: relative;
  background-color: #4D4F4F;
  color: #D7DBDB;
  height: 100%;
  border-bottom: none;
  border-radius: 30px 30px 0 0;
  margin: 100px;
  padding: 60px;
}

</style>
