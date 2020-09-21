<template>
  <v-container class="px-16 secondary--text">
    <v-row class="my-12 mx-15" justify="space-between" align="center" no-gutters>
      <v-col class="mt-10" lg="3" sm="12" xs="12">
        <img id="profileImg" src="../assets/me.png"/> 
      </v-col>
      <v-col lg="9" sm="12" xs="12">
        <div class="text-h2 mt-4">{{ title }}</div>
        <div class="text-h4 mt-4">{{ position }}</div>
        <div class="text-body-1 mt-4"> {{ description }}</div>
      </v-col>
    </v-row>
    <v-row class="my-12 mx-15" no-gutters>
      <v-col
        lg="3"
        sm="12"
        xs="12"
        v-for="(info, i) in persoLinkInfo"
        :key="i"
        @click="() => handleInfoClick(info)"
      >
        <HomeChip
          :icon="info.icon"
          :text="info.text"
          :color="info.color"
          :pos="i"
          :numChips="persoLinkInfo.length"
        />
      </v-col>  
    </v-row>
    <v-row class="mt-15 mb-10 mx-15" justify="space-between" align="center" no-gutters>
      <v-col lg="2">
        <v-icon class="pa-5" id="techStackIcon" color="secondary" large>mdi-layers-triple</v-icon>
      </v-col>
      <v-col lg="10" sm="9" xs="9">
        <div class="text-h4">Tech Stack</div>
        <div class="text-body-1  mt-4">What I used and learned throughout my internships and projects</div>
      </v-col>
    </v-row>
    <v-row class="mx-12" justify="space-between" align="center">
      <v-col lg="4" sm="12" xs="12" v-for="(techStackInfo, techStackTitle, i) in techStackInfo" :key="i">
        <HomeTechStackCard :title="techStackTitle" :infos="techStackInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import HomeChip from './HomeChip'
  import HomeTechStackCard from './HomeTechStackCard'

  export default {
    name: 'Home',

    components: {
      'HomeChip': HomeChip,
      'HomeTechStackCard': HomeTechStackCard,
    },

    data: () => ({
      title: "Hi! I'm Anaël Wan",
      position: "Software Developer",
      description: "I have over 3 years of software development experience in developing, testing and deploying web applications and backend servers. I completed 5 internships, both at startups and large companies.",
      persoLinkInfo: [
        {
          type:"file",
          text: "My Resumé",
          icon: "mdi-download",
          link: "../files/resume.pdf",
          color: "primary"
        },
        {
          type:"github",
          text: "github.com/Ana-Wan",
          icon: "mdi-github",
          link: "github.com/Ana-Wan", 
          color: "#252A2E"
        },
        {
          type:"linkedin",
          text: "linkedin.com/in/ana-wan",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/ana-wan", 
          color: "#0277B5"
        },
        {
          type:"email",
          text: "anaelwan10@gmail.com",
          icon: "mdi-email-outline",
          link: "contact",
          color: "#D54E41"
        }
      ],
      techStackInfo: {
        "Backend": ["Node Js", "Python3", "C#", "Firebase"],
        "Frontend": ["ReactJs/Hooks", "Vue Js", "Axios", ""],
        "Dev Tools": ["Google Cloud Platform", "Circle CI", "Terraform", "Git version control"]
      }
    }),

  methods: {
    handleInfoClick (info) {
      if (info.type == 'file') {
        console.log(info.link)
        const blob = new Blob([info.link], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', "ana-wan-resume.pdf")
        document.body.appendChild(link)
        link.click()
      } else if (info.type == 'email') {
        this.$emit('onScrollToComponent', 'contact')
      } else {
        window.open(info.link, "_blank");  
      }
    }
  }

}
</script>

<style lang="scss">
#profileImg {
  position: relative;
  height: 160px;
  width: 160px;
  border: 5px solid var(--v-primary-base);
  border-radius: 50%;
}

#techStackIcon {
  border: 1px solid var(--v-secondary-base);
  border-radius: 50%;
}
</style>
