<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row>
          <v-col>
            <v-card flat tile style="padding-top: 15px" align="center" justify="center">
              <v-flex>
                <v-img height="40%" width="40%" src="../../assets/fiuPantherLogo.png"></v-img>
              </v-flex>
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
              <v-card-actions>
                <v-btn small text color="primary">New user</v-btn>
                <v-btn small text color="primary">Forgot Password</v-btn>
                <v-btn color="primary">Home</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./SignIn.js"></script>
<style src="./SignIn.css"></style>