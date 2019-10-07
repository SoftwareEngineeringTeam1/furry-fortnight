<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card style="padding-top: 15px" align="center" justify="center" class="elevation-12">
              <v-flex>
                <v-img height="40%" width="40%" src="../../assets/fiuPantherLogo.png"></v-img>
              </v-flex>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    label="Login" 
                    name="login" 
                    filled 
                    type="text">
                  </v-text-field>
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
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./Login.js"></script>
<style src="./Login.css"></style>