<template>
  <v-app id="inspire">
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols=8>
            <v-flex style="padding: 10%">
                <!--
                <v-card-title>About Pavement...</v-card-title>
                <v-card-text style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px;">
                  Pavement is a social platform for students to host, attend, and locate study groups and student
                  organization events on their campus. With Pavement’s unique interactive map view, students are
                  able to see all events happening in real time around their campus and all the details for them in
                  the touch of a button. Since Pavement is linked with your university’s account, you’ll never need
                  to worry about making a new account or adding any of your class information. Furthermore,
                  students and organizations are able to filter events to a variety of categories to quickly find ones
                  of interest. Login today and never miss an event again!
                </v-card-text>
                -->
                <v-img src="..\..\assets\PavementLogoFinal.png"></v-img>
            </v-flex>
          </v-col>
          <v-col class="fill-height">
            <v-card shaped style="margin: 5%" align="center" justify="center">
              <!--
              <v-flex>
                <v-img height="40%" width="40%" src="../../assets/fiuPantherLogo.png"></v-img>
              </v-flex>-->
              <h1 style="font-size: 65px; padding-top:5%" >Log In</h1>
              <v-card-text>
                
                <v-form>
                  <v-text-field label="Login" name="Login" filled type="text"></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    filled
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions style="padding-bottom: 5%">                
                <div class="flex-grow-1"></div>
                <v-btn text >Forgot Password</v-btn>
                <v-btn style="margin-right:1.5%" large dark color="rgb(231,75,74)">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!--<v-row>
          <v-col justify="center" align="center">
            <v-card width="90%">
              <v-card-title>About us...</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tortor, lobortis eget imperdiet a, vestibulum sit amet erat. Vivamus vel suscipit quam. Donec nec placerat tellus. Morbi viverra ante sodales porta egestas. Integer in tellus aliquet, pretium sapien at, eleifend erat. Integer dapibus ipsum sed ante interdum, ac auctor velit tincidunt. Cras tristique suscipit placerat. Praesent maximus, libero id vestibulum rhoncus, sapien velit suscipit metus, at pretium sapien lacus at leo. Suspendisse aliquet erat vel felis sagittis ornare. Vivamus egestas sit amet massa interdum congue. Donec imperdiet justo nisi, sed pretium lectus sagittis et. Vivamus sagittis lorem ac libero vulputate, eu molestie nisi convallis. Morbi ac odio at odio venenatis ullamcorper ut nec tortor.
                Nulla eu sagittis tortor. In sit amet lorem nec arcu feugiat tincidunt. Nam luctus nunc eget nulla molestie, eu scelerisque lorem sagittis. Mauris lobortis neque quam, non pretium massa scelerisque vestibulum. Sed placerat, purus a cursus fringilla, erat urna interdum nunc, ac venenatis lectus neque et erat. Phasellus finibus hendrerit ligula eget efficitur. Aenean eu risus velit. Integer nec nulla pulvinar, blandit eros eu, dapibus enim. Pellentesque a cursus urna. Vestibulum blandit aliquet justo, at porta mauris. Donec tincidunt eu massa sit amet congue.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col justify="center" align="center">
            <SignIn />
          </v-col>
        </v-row>-->
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./Home.js"></script>
<style src="./Home.css"></style>