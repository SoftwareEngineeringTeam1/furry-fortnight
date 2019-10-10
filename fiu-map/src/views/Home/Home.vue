<template>
  <v-app id="inspire">
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-card color="rgba(255,255,255,.75)">
              <v-card-title>About Pavement...</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tortor, lobortis eget imperdiet a, vestibulum sit amet erat. Vivamus vel suscipit quam. Donec nec placerat tellus. Morbi viverra ante sodales porta egestas. Integer in tellus aliquet, pretium sapien at, eleifend erat. Integer dapibus ipsum sed ante interdum, ac auctor velit tincidunt. Cras tristique suscipit placerat. Praesent maximus, libero id vestibulum rhoncus, sapien velit suscipit metus, at pretium sapien lacus at leo. Suspendisse aliquet erat vel felis sagittis ornare. Vivamus egestas sit amet massa interdum congue. Donec imperdiet justo nisi, sed pretium lectus sagittis et. Vivamus sagittis lorem ac libero vulputate, eu molestie nisi convallis. Morbi ac odio at odio venenatis ullamcorper ut nec tortor.
                Nulla eu sagittis tortor. In sit amet lorem nec arcu feugiat tincidunt. Nam luctus nunc eget nulla molestie, eu scelerisque lorem sagittis. Mauris lobortis neque quam, non pretium massa scelerisque vestibulum. Sed placerat, purus a cursus fringilla, erat urna interdum nunc, ac venenatis lectus neque et erat. Phasellus finibus hendrerit ligula eget efficitur. Aenean eu risus velit. Integer nec nulla pulvinar, blandit eros eu, dapibus enim. Pellentesque a cursus urna. Vestibulum blandit aliquet justo, at porta mauris. Donec tincidunt eu massa sit amet congue.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card color="rgba(255,255,255,.75)" align="center" justify="center">
              <v-flex>
                <v-img height="40%" width="40%" src="../../assets/fiuPantherLogo.png"></v-img>
              </v-flex>
              <v-card-text >
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
              <v-card-actions>
                <v-btn small text color="primary">New user</v-btn>
                <v-btn small text color="primary">Forgot Password</v-btn>
                <v-btn color="primary">Home</v-btn>
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